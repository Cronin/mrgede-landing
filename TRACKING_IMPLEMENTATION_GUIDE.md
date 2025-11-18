# Conversion Tracking Implementation Guide - mrgede.com

**Status:** Code Implemented ✅ - Manual Setup Required
**Date:** 2025-01-18

---

## What Has Been Done Automatically ✅

All code changes have been implemented:

### 1. Tracking Code Added to Layout ✅
**File:** `/app/layout.tsx`

**Added:**
- Google Tag Manager (GTM) script
- Google Analytics 4 (GA4) script
- Schema.org Person markup for SEO
- TypeScript support for dataLayer

**Features:**
- Environment variable support (NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_GA4_ID)
- Async loading for performance
- Proper noscript fallback
- Structured data for rich search results

### 2. Event Tracking Added to All Links ✅

**Files Updated:**
- `/app/components/ContactCTA.tsx` - Instagram & TikTok CTAs
- `/app/components/Footer.tsx` - Social icons & email link
- `/components/ui/phone-mockup.tsx` - Hero phone mockup screens

**Events Tracked:**
- `instagram_click` - All Instagram profile links
- `tiktok_click` - All TikTok profile links
- `email_click` - Email link clicks

**Event Data Captured:**
- `button_location` - Where the click occurred (hero_phone_mockup, contact_cta, footer)
- `conversion_method` - Type of conversion (instagram, tiktok, email)
- `conversion_action` - Specific action (profile_view, message, follow)
- `link_url` - Destination URL

### 3. Fixed Footer Social Links ✅
**Changed:**
- Instagram: ~~instagram.com~~ → https://www.instagram.com/thegede ✅
- Removed: Youtube, LinkedIn, Twitter (generic placeholder links)
- Added: TikTok icon with correct profile URL ✅
- Kept: Email link with tracking ✅

### 4. TypeScript Support ✅
**File:** `/types/gtm.d.ts`
- Added proper TypeScript declarations for window.dataLayer
- Prevents TypeScript errors in components

---

## What You Need to Do Manually

### Step 1: Create GA4 Property (10 minutes)

**Go to:** https://analytics.google.com/

**Steps:**
1. Click "Admin" (gear icon, bottom left)
2. Under "Property" column, click "Create Property"
3. Fill in details:
   - **Property name:** `GEDE - Content Creator Portfolio`
   - **Reporting time zone:** `(GMT+08:00) Bali`
   - **Currency:** `United States Dollar`
4. Click "Next"
5. Business details:
   - **Industry category:** `Arts & Entertainment > Performing Arts`
   - **Business size:** `Small (1-10 employees)`
6. Click "Next"
7. Business objectives: Select "Examine user behavior"
8. Click "Create"
9. Accept Terms of Service
10. Set up Data Stream:
    - Choose "Web"
    - **Website URL:** `https://mrgede.com`
    - **Stream name:** `mrgede.com - Main Site`
11. Click "Create stream"

**IMPORTANT:** Copy the **Measurement ID** (format: `G-XXXXXXXXX`)

**Example:** `G-ABC123XYZ`

---

### Step 2: Create GTM Container (15 minutes)

**Go to:** https://tagmanager.google.com/

**Steps:**
1. Click "Create Account" (or use existing account)
2. Account Setup:
   - **Account Name:** `GEDE Content Creator`
   - **Country:** `Indonesia`
3. Container Setup:
   - **Container Name:** `mrgede.com`
   - **Target Platform:** `Web`
4. Click "Create"
5. Accept Terms of Service

**IMPORTANT:** Copy the **Container ID** (format: `GTM-XXXXXXX`)

**Example:** `GTM-ABC1234`

---

### Step 3: Configure GTM Container (20 minutes)

**In GTM Dashboard:**

#### 3.1 Create Variables

Go to **Variables** → **User-Defined Variables** → **New**

Create these Data Layer Variables:

1. **Variable Name:** `DLV - Event`
   - **Variable Type:** Data Layer Variable
   - **Data Layer Variable Name:** `event`
   - Save

2. **Variable Name:** `DLV - Button Location`
   - **Variable Type:** Data Layer Variable
   - **Data Layer Variable Name:** `button_location`
   - Save

3. **Variable Name:** `DLV - Conversion Method`
   - **Variable Type:** Data Layer Variable
   - **Data Layer Variable Name:** `conversion_method`
   - Save

4. **Variable Name:** `DLV - Conversion Action`
   - **Variable Type:** Data Layer Variable
   - **Data Layer Variable Name:** `conversion_action`
   - Save

5. **Variable Name:** `DLV - Link URL`
   - **Variable Type:** Data Layer Variable
   - **Data Layer Variable Name:** `link_url`
   - Save

#### 3.2 Create Triggers

Go to **Triggers** → **New**

Create these Custom Event Triggers:

1. **Trigger Name:** `CE - Instagram Click`
   - **Trigger Type:** Custom Event
   - **Event name:** `instagram_click`
   - Save

2. **Trigger Name:** `CE - TikTok Click`
   - **Trigger Type:** Custom Event
   - **Event name:** `tiktok_click`
   - Save

3. **Trigger Name:** `CE - Email Click`
   - **Trigger Type:** Custom Event
   - **Event name:** `email_click`
   - Save

#### 3.3 Create Tags

Go to **Tags** → **New**

**Tag 1: GA4 Configuration**
1. **Tag Name:** `GA4 - Configuration`
2. **Tag Type:** Google Analytics: GA4 Configuration
3. **Measurement ID:** `G-XXXXXXXXX` (from Step 1)
4. **Triggering:** All Pages
5. Save

**Tag 2: GA4 Instagram Click Event**
1. **Tag Name:** `GA4 Event - Instagram Click`
2. **Tag Type:** Google Analytics: GA4 Event
3. **Configuration Tag:** Select "GA4 - Configuration"
4. **Event Name:** `instagram_click`
5. **Event Parameters:** Add these:
   - `button_location` → `{{DLV - Button Location}}`
   - `conversion_method` → `{{DLV - Conversion Method}}`
   - `conversion_action` → `{{DLV - Conversion Action}}`
   - `link_url` → `{{DLV - Link URL}}`
6. **Triggering:** CE - Instagram Click
7. Save

**Tag 3: GA4 TikTok Click Event**
1. **Tag Name:** `GA4 Event - TikTok Click`
2. **Tag Type:** Google Analytics: GA4 Event
3. **Configuration Tag:** Select "GA4 - Configuration"
4. **Event Name:** `tiktok_click`
5. **Event Parameters:** Add these:
   - `button_location` → `{{DLV - Button Location}}`
   - `conversion_method` → `{{DLV - Conversion Method}}`
   - `conversion_action` → `{{DLV - Conversion Action}}`
   - `link_url` → `{{DLV - Link URL}}`
6. **Triggering:** CE - TikTok Click
7. Save

**Tag 4: GA4 Email Click Event**
1. **Tag Name:** `GA4 Event - Email Click`
2. **Tag Type:** Google Analytics: GA4 Event
3. **Configuration Tag:** Select "GA4 - Configuration"
4. **Event Name:** `email_click`
5. **Event Parameters:** Add these:
   - `button_location` → `{{DLV - Button Location}}`
   - `conversion_method` → `{{DLV - Conversion Method}}`
   - `email_address` → `{{DLV - Email Address}}`
6. **Triggering:** CE - Email Click
7. Save

#### 3.4 Test in Preview Mode

1. Click "Preview" (top right)
2. Enter: `http://localhost:3000` (or your local dev URL)
3. Click "Connect"
4. In your browser:
   - Click Instagram button → Verify `instagram_click` event fires
   - Click TikTok button → Verify `tiktok_click` event fires
   - Click Email link → Verify `email_click` event fires
5. Check that all variables populate correctly
6. If all events work, exit Preview mode

#### 3.5 Publish Container

1. Click "Submit" (top right)
2. Version Name: `Initial Setup - Instagram & TikTok Tracking`
3. Version Description:
   ```
   - Added GA4 configuration
   - Tracking Instagram profile clicks (3 locations)
   - Tracking TikTok profile clicks (3 locations)
   - Tracking email clicks (1 location)
   - Data layer variables for conversion tracking
   ```
4. Click "Publish"

---

### Step 4: Add IDs to Environment Variables (5 minutes)

**Option A: Add to Vercel Dashboard**
1. Go to https://vercel.com/your-project
2. Settings → Environment Variables
3. Add:
   - `NEXT_PUBLIC_GTM_ID` = `GTM-XXXXXXX` (your Container ID)
   - `NEXT_PUBLIC_GA4_ID` = `G-XXXXXXXXX` (your Measurement ID)
4. Redeploy

**Option B: Add to .env.local (for local development)**
```bash
# Add to /Users/claudiocronin/websites/sites/mrgede.com/.env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXX
```

**Option C: Hardcode in layout.tsx (quick test)**
Edit `/app/layout.tsx`:
```typescript
const GTM_ID = 'GTM-XXXXXXX'; // Replace with your actual ID
const GA4_ID = 'G-XXXXXXXXX'; // Replace with your actual ID
```

---

### Step 5: Verify Email Routing (10 minutes)

**Go to:** Cloudflare Dashboard → mrgede.com → Email → Email Routing

**Check:**
1. Is Email Routing enabled? (should say "Active")
2. Destination address: Should route to `localclark@gmail.com`
3. Catch-all address: Configured?

**If NOT configured:**
1. Enable Email Routing
2. Add destination email: `localclark@gmail.com`
3. Verify email (Cloudflare sends confirmation)
4. Add routing rule:
   - **Custom address:** `hello@mrgede.com`
   - **Action:** Send to `localclark@gmail.com`
5. Optional: Add catch-all for any @mrgede.com email
6. Save

**Test:**
```bash
# Send test email
echo "Test email body" | mail -s "Test from mrgede.com" hello@mrgede.com

# Or use online tool: https://www.mail-tester.com/
```

---

### Step 6: Deploy to Production (5 minutes)

**If using Vercel:**
```bash
cd /Users/claudiocronin/websites/sites/mrgede.com
vercel --prod
```

**Or:**
- Push changes to Git
- Vercel auto-deploys from main branch

**Verify deployment:**
1. Visit https://mrgede.com
2. Open browser DevTools → Console
3. Type: `window.dataLayer`
4. Should see array with GTM events
5. Click Instagram button
6. Check console - should see new event pushed to dataLayer

---

### Step 7: Verify Tracking in GA4 (24-48 hours)

**Immediate (Real-time):**
1. Go to GA4 → Reports → Realtime
2. Visit your site in another browser
3. Click Instagram/TikTok buttons
4. Should see events appear in Realtime report (within 30 seconds)

**After 24 hours:**
1. Go to GA4 → Reports → Engagement → Events
2. Should see:
   - `page_view` (automatic)
   - `instagram_click` (custom)
   - `tiktok_click` (custom)
   - `email_click` (custom)

**Create Custom Report:**
1. Go to Explore → Blank
2. Dimensions: Add `Event name`, `Button location`
3. Metrics: Add `Event count`
4. Rows: `Event name`
5. Columns: `Button location`
6. Save as "Social Conversion Tracking"

---

## Testing Checklist

After deployment, test each conversion point:

### Instagram Tracking
- [ ] Hero phone mockup (Instagram screen) - Click → Opens Instagram + tracks event
- [ ] Contact CTA "Message on Instagram" button - Click → Opens Instagram + tracks event
- [ ] Footer Instagram icon - Click → Opens Instagram + tracks event

### TikTok Tracking
- [ ] Hero phone mockup (TikTok screen) - Click → Opens TikTok + tracks event
- [ ] Contact CTA "Follow on TikTok" button - Click → Opens TikTok + tracks event
- [ ] Footer TikTok icon - Click → Opens TikTok + tracks event

### Email Tracking
- [ ] Footer "hello@mrgede.com" link - Click → Opens email client + tracks event

### GA4 Dashboard
- [ ] Real-time report shows events
- [ ] Event parameters populate correctly
- [ ] No errors in browser console

### GTM
- [ ] Preview mode shows all events firing
- [ ] All tags fire on correct triggers
- [ ] Variables populate with correct data

---

## Expected Data Flow

```
User clicks Instagram button
    ↓
onClick handler fires
    ↓
window.dataLayer.push({
  event: 'instagram_click',
  button_location: 'contact_cta',
  conversion_method: 'instagram',
  ...
})
    ↓
GTM detects custom event
    ↓
GTM fires GA4 Event tag
    ↓
GA4 receives event + parameters
    ↓
Data appears in GA4 Reports (within 24-48h)
```

---

## Monitoring & Optimization

### Week 1: Verify Data Collection
- Check GA4 daily for event counts
- Verify all 3 locations tracking correctly
- Check for any missing data

### Week 2: Analyze Patterns
- Which button location gets most clicks?
- Instagram vs TikTok preference?
- Mobile vs Desktop behavior?

### Month 1: Optimize
- Add more CTAs to high-traffic areas
- A/B test button copy
- Create conversion goals in GA4
- Setup audiences for remarketing

### Ongoing:
- Monthly review of conversion data
- Adjust strategy based on insights
- Test new conversion methods
- Refine tracking as needed

---

## Conversion Goals to Set in GA4

**Create these Key Events (Conversions):**

1. **Instagram Profile View**
   - Event: `instagram_click`
   - Description: User clicked to view Instagram profile

2. **TikTok Profile View**
   - Event: `tiktok_click`
   - Description: User clicked to view TikTok profile

3. **Email Contact**
   - Event: `email_click`
   - Description: User clicked email link

**How to set up:**
1. GA4 → Admin → Events
2. Click "Mark as conversion" next to each event
3. These will now appear in Conversions report

---

## Advanced: Custom Dimensions (Optional)

Add these for more detailed analysis:

**Custom Dimensions:**
1. **Button Location**
   - Scope: Event
   - Event parameter: `button_location`
   - Description: Where on the page the click occurred

2. **Conversion Method**
   - Scope: Event
   - Event parameter: `conversion_method`
   - Description: Type of social platform

**How to add:**
1. GA4 → Admin → Custom Definitions
2. Create custom dimension
3. Map to event parameter
4. Use in reports and explorations

---

## Troubleshooting

### Events not appearing in GA4?
- Check GTM Preview mode - are events firing?
- Verify GA4 Measurement ID is correct
- Check browser console for JavaScript errors
- Wait 24-48 hours for data to process

### GTM Preview not connecting?
- Clear browser cache
- Disable browser extensions (especially ad blockers)
- Try incognito/private mode
- Check if localhost is running

### DataLayer errors in console?
- Verify `types/gtm.d.ts` exists
- Restart TypeScript server
- Check if dataLayer is initialized before components mount

### Email not routing?
- Verify Cloudflare DNS is active
- Check SPF/DKIM records
- Test with multiple email clients
- Check Gmail spam folder

---

## Files Modified

All changes are committed and ready:

1. `/app/layout.tsx` - Added GA4 + GTM + Schema.org
2. `/app/components/ContactCTA.tsx` - Added event tracking
3. `/app/components/Footer.tsx` - Fixed URLs + added tracking
4. `/components/ui/phone-mockup.tsx` - Made clickable + added tracking
5. `/types/gtm.d.ts` - TypeScript declarations (NEW)
6. `/CONVERSION_TRACKING_ANALYSIS.md` - Complete analysis (NEW)
7. `/TRACKING_IMPLEMENTATION_GUIDE.md` - This file (NEW)

---

## Support & Documentation

**GTM Documentation:**
- https://support.google.com/tagmanager/

**GA4 Documentation:**
- https://support.google.com/analytics/answer/10089681

**DataLayer Reference:**
- https://developers.google.com/tag-platform/tag-manager/datalayer

**Cloudflare Email Routing:**
- https://developers.cloudflare.com/email-routing/

---

## Summary

**Code Changes:** ✅ COMPLETE
**Manual Setup:** 🔧 REQUIRED (Steps 1-7 above)
**Estimated Time:** ~70 minutes total
**Difficulty:** Beginner-Intermediate

Once you complete the manual steps, you'll have:
- Full visibility into Instagram, TikTok, and email conversions
- Data-driven insights for optimizing your content strategy
- Professional analytics setup for client reporting
- Foundation for future tracking enhancements

**Questions?** Review the analysis document: `CONVERSION_TRACKING_ANALYSIS.md`
