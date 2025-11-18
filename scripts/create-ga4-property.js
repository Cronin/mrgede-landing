#!/usr/bin/env node

/**
 * Create Google Analytics 4 Property - mrgede.com
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  domain: 'mrgede.com',
  businessName: 'GEDE - Bali Content Creator',
  serviceAccountPath: path.join(process.env.HOME, 'websites/.secrets/gsc-service-account.json'),
};

const credentials = JSON.parse(fs.readFileSync(SITE_CONFIG.serviceAccountPath, 'utf8'));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    'https://www.googleapis.com/auth/analytics.edit',
    'https://www.googleapis.com/auth/analytics.manage.users',
  ],
});

const analyticsadmin = google.analyticsadmin('v1beta');

async function createGA4Account(authClient) {
  console.log('\n📊 Creating GA4 Account...');

  try {
    const response = await analyticsadmin.accounts.list({
      auth: authClient,
    });

    const accounts = response.data.accounts || [];
    console.log(`   Found ${accounts.length} existing account(s)`);

    // Look for existing account
    let account = accounts.find(acc => acc.displayName.includes('SEO Multi-Site') || acc.displayName.includes('Multi-Site'));

    if (account) {
      console.log(`✅ Using existing account: ${account.displayName}`);
      return account;
    }

    // Try to create new account
    try {
      const createResponse = await analyticsadmin.accounts.create({
        auth: authClient,
        requestBody: {
          displayName: 'SEO Multi-Site Manager',
          regionCode: 'ID',
        },
      });

      account = createResponse.data;
      console.log(`✅ Created new account: ${account.displayName}`);
      return account;
    } catch (createError) {
      console.log('⚠️  Cannot create account via API. Using first available account.');
      if (accounts.length > 0) {
        return accounts[0];
      }
      throw new Error('No GA4 accounts found and cannot create new one. Please create manually at https://analytics.google.com/');
    }
  } catch (error) {
    console.error('❌ Error with GA4 account:', error.message);
    throw error;
  }
}

async function createGA4Property(authClient, accountName) {
  console.log('\n🏠 Creating GA4 Property...');

  try {
    const response = await analyticsadmin.properties.create({
      auth: authClient,
      requestBody: {
        parent: accountName,
        displayName: SITE_CONFIG.businessName,
        timeZone: 'Asia/Jakarta',
        currencyCode: 'IDR',
        industryCategory: 'ARTS_AND_ENTERTAINMENT',
      },
    });

    const property = response.data;
    console.log(`✅ Created property: ${property.displayName}`);
    console.log(`   Property ID: ${property.name}`);

    return property;
  } catch (error) {
    console.error('❌ Error creating property:', error.message);
    throw error;
  }
}

async function createDataStream(authClient, propertyName) {
  console.log('\n🌊 Creating Data Stream...');

  try {
    const response = await analyticsadmin.properties.dataStreams.create({
      auth: authClient,
      parent: propertyName,
      requestBody: {
        displayName: `${SITE_CONFIG.domain} - Web`,
        type: 'WEB_DATA_STREAM',
        webStreamData: {
          defaultUri: `https://${SITE_CONFIG.domain}`,
        },
      },
    });

    const stream = response.data;
    console.log(`✅ Created data stream: ${stream.displayName}`);
    console.log(`   Measurement ID: ${stream.webStreamData.measurementId}`);

    return stream;
  } catch (error) {
    console.error('❌ Error creating data stream:', error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 GA4 Property Creation - mrgede.com');
  console.log('=' .repeat(60));
  console.log(`Domain: ${SITE_CONFIG.domain}`);
  console.log(`Business: ${SITE_CONFIG.businessName}`);
  console.log('=' .repeat(60));

  try {
    const authClient = await auth.getClient();

    // Step 1: Get or create account
    const account = await createGA4Account(authClient);

    // Step 2: Create property
    const property = await createGA4Property(authClient, account.name);

    // Step 3: Create data stream
    const stream = await createDataStream(authClient, property.name);

    // Save config
    const config = {
      measurementId: stream.webStreamData.measurementId,
      propertyId: property.name,
      accountId: account.name,
      domain: SITE_CONFIG.domain,
      createdAt: new Date().toISOString(),
    };

    const configPath = path.join(__dirname, '..', 'ga4-config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    console.log('\n' + '='.repeat(60));
    console.log('✅ GA4 SETUP COMPLETE!');
    console.log('=' .repeat(60));
    console.log(`\n📊 Measurement ID: ${stream.webStreamData.measurementId}`);
    console.log(`🔗 Property URL: https://analytics.google.com/analytics/web/#/p${property.name.split('/')[1]}/reports/intelligenthome`);
    console.log('\n📝 Next Steps:');
    console.log('1. Update .env.local with Measurement ID');
    console.log('2. Update GTM tags with Measurement ID');
    console.log('3. Publish GTM container');
    console.log('4. Test tracking in GA4 Realtime report');
    console.log(`\n💾 Config saved to: ga4-config.json`);

    return config;
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
