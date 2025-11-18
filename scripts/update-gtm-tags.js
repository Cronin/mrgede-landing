#!/usr/bin/env node

/**
 * Update GTM Tags for mrgede.com
 * Updates existing variable and ensures all conversion tags exist
 */

const { google } = require('googleapis');

const CREDENTIALS_PATH = '/Users/claudiocronin/websites/.secrets/gsc-service-account.json';
const DOMAIN = 'mrgede.com';
const ACCOUNT_ID = '6319600105';
const CONTAINER_ID = '235418391';
const GA4_MEASUREMENT_ID = 'G-45VZ93SKB7';

const GTM_SCOPES = [
  'https://www.googleapis.com/auth/tagmanager.edit.containers',
  'https://www.googleapis.com/auth/tagmanager.manage.accounts',
  'https://www.googleapis.com/auth/tagmanager.publish',
];

async function main() {
  console.log('\n========================================');
  console.log('GTM Tag Update for mrgede.com');
  console.log('========================================\n');

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: GTM_SCOPES,
    });

    const authClient = await auth.getClient();
    const tagmanager = google.tagmanager({ version: 'v2', auth: authClient });

    const containerPath = `accounts/${ACCOUNT_ID}/containers/${CONTAINER_ID}`;

    // Get workspace
    const workspaces = await tagmanager.accounts.containers.workspaces.list({
      parent: containerPath
    });

    const workspace = workspaces.data.workspace?.find(w => w.name.includes('Default')) || workspaces.data.workspace?.[0];
    const workspacePath = workspace.path;
    const workspaceId = workspace.workspaceId;

    console.log(`Using workspace: ${workspace.name} (ID: ${workspaceId})\n`);

    // List existing variables
    const variables = await tagmanager.accounts.containers.workspaces.variables.list({
      parent: workspacePath
    });

    const existingVars = variables.data.variable || [];
    const ga4Var = existingVars.find(v => v.name === 'GA4 Measurement ID');

    if (ga4Var) {
      console.log(`Found existing variable: ${ga4Var.name}`);
      console.log(`Updating to: ${GA4_MEASUREMENT_ID}...`);

      await tagmanager.accounts.containers.workspaces.variables.update({
        path: ga4Var.path,
        requestBody: {
          name: 'GA4 Measurement ID',
          type: 'c',
          parameter: [
            {
              key: 'value',
              type: 'template',
              value: GA4_MEASUREMENT_ID
            }
          ],
          variableId: ga4Var.variableId,
          fingerprint: ga4Var.fingerprint
        }
      });
      console.log('✅ Updated GA4 Measurement ID variable\n');
    } else {
      console.log('Creating new GA4 Measurement ID variable...');
      await tagmanager.accounts.containers.workspaces.variables.create({
        parent: workspacePath,
        requestBody: {
          name: 'GA4 Measurement ID',
          type: 'c',
          parameter: [
            {
              key: 'value',
              type: 'template',
              value: GA4_MEASUREMENT_ID
            }
          ]
        }
      });
      console.log('✅ Created GA4 Measurement ID variable\n');
    }

    // List existing tags and triggers
    const tagsResponse = await tagmanager.accounts.containers.workspaces.tags.list({
      parent: workspacePath
    });
    const triggersResponse = await tagmanager.accounts.containers.workspaces.triggers.list({
      parent: workspacePath
    });

    const existingTags = tagsResponse.data.tag || [];
    const existingTriggers = triggersResponse.data.trigger || [];

    console.log(`Found ${existingTags.length} existing tags`);
    console.log(`Found ${existingTriggers.length} existing triggers\n`);

    // Get All Pages trigger
    let allPagesTrigger = existingTriggers.find(t => t.name === 'All Pages');
    if (!allPagesTrigger) {
      console.log('Creating All Pages trigger...');
      const trigger = await tagmanager.accounts.containers.workspaces.triggers.create({
        parent: workspacePath,
        requestBody: {
          name: 'All Pages',
          type: 'PAGEVIEW'
        }
      });
      allPagesTrigger = trigger.data;
      console.log('✅ Created All Pages trigger\n');
    }

    // Ensure GA4 Config tag exists
    let ga4ConfigTag = existingTags.find(t => t.name === 'GA4 - Configuration');
    if (!ga4ConfigTag) {
      console.log('Creating GA4 Configuration tag...');
      const tag = await tagmanager.accounts.containers.workspaces.tags.create({
        parent: workspacePath,
        requestBody: {
          name: 'GA4 - Configuration',
          type: 'gaawc',
          parameter: [
            {
              key: 'measurementId',
              type: 'template',
              value: '{{GA4 Measurement ID}}'
            }
          ],
          firingTriggerId: [allPagesTrigger.triggerId]
        }
      });
      console.log('✅ Created GA4 Config tag\n');
    } else {
      console.log('✅ GA4 Configuration tag already exists\n');
    }

    // Define conversion events
    const events = [
      {
        name: 'Instagram Click',
        eventName: 'instagram_click',
        triggerName: 'Custom Event - instagram_click'
      },
      {
        name: 'TikTok Click',
        eventName: 'tiktok_click',
        triggerName: 'Custom Event - tiktok_click'
      },
      {
        name: 'Email Click',
        eventName: 'email_click',
        triggerName: 'Custom Event - email_click'
      }
    ];

    console.log('Configuring conversion events...\n');

    for (const event of events) {
      console.log(`Setting up: ${event.name}`);

      // Check if trigger exists
      let trigger = existingTriggers.find(t => t.name === event.triggerName);
      if (!trigger) {
        console.log(`  Creating trigger: ${event.triggerName}...`);
        const triggerResponse = await tagmanager.accounts.containers.workspaces.triggers.create({
          parent: workspacePath,
          requestBody: {
            name: event.triggerName,
            type: 'CUSTOM_EVENT',
            customEventFilter: [
              {
                type: 'EQUALS',
                parameter: [
                  {
                    key: 'arg0',
                    type: 'template',
                    value: '{{_event}}'
                  },
                  {
                    key: 'arg1',
                    type: 'template',
                    value: event.eventName
                  }
                ]
              }
            ]
          }
        });
        trigger = triggerResponse.data;
        console.log(`  ✅ Created trigger`);
      } else {
        console.log(`  ✅ Trigger already exists`);
      }

      // Check if tag exists
      const tagName = `GA4 - ${event.name}`;
      let eventTag = existingTags.find(t => t.name === tagName);
      if (!eventTag) {
        console.log(`  Creating event tag...`);
        await tagmanager.accounts.containers.workspaces.tags.create({
          parent: workspacePath,
          requestBody: {
            name: tagName,
            type: 'gaawe',
            parameter: [
              {
                key: 'eventName',
                type: 'template',
                value: event.eventName
              },
              {
                key: 'measurementIdOverride',
                type: 'template',
                value: '{{GA4 Measurement ID}}'
              }
            ],
            firingTriggerId: [trigger.triggerId]
          }
        });
        console.log(`  ✅ Created event tag`);
      } else {
        console.log(`  ✅ Event tag already exists`);
      }
      console.log('');
    }

    // Create version
    console.log('Creating GTM version...');
    const version = await tagmanager.accounts.containers.workspaces.create_version({
      path: workspacePath,
      requestBody: {
        name: 'GA4 Setup Complete',
        notes: `GA4 Measurement ID: ${GA4_MEASUREMENT_ID}\nConversion events: instagram_click, tiktok_click, email_click`
      }
    });

    const versionId = version.data.containerVersion?.containerVersionId || '0';
    console.log(`✅ Created Version ${versionId}\n`);

    // Generate submit URL
    const submitUrl = `https://tagmanager.google.com/#/container/accounts/${ACCOUNT_ID}/containers/${CONTAINER_ID}/workspaces/${workspaceId}/versions/0`;

    console.log('========================================');
    console.log('✅ GTM UPDATE COMPLETE!');
    console.log('========================================\n');
    console.log(`Domain: ${DOMAIN}`);
    console.log(`GTM Container: GTM-G22GX754 (${CONTAINER_ID})`);
    console.log(`GA4 Measurement ID: ${GA4_MEASUREMENT_ID}`);
    console.log('\n📝 Manual Step - Publish GTM Container:');
    console.log(submitUrl);
    console.log('\n👆 Click the link above and press "Submit" in GTM dashboard\n');

  } catch (error) {
    console.error('\n❌ UPDATE FAILED:', error.message);
    if (error.response?.data) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
