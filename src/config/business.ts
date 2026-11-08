// Single source of truth for business details. Replace the PHONE values and
// STREET address once confirmed from the official website or Google listing.
export const BUSINESS = {
  name: 'Budget Repair Solutions',
  category: 'HVAC Contractor',
  phoneDisplay: '(000) 000-0000',
  phoneTel: '+10000000000',
  city: 'Lawrenceville',
  region: 'GA',
  regionName: 'Georgia',
  locationSlug: 'lawrenceville-ga',
  mapsUrl: 'https://maps.app.goo.gl/StBHss1QX8ob8f9n7',
  siteUrl: 'https://www.budgetrepairsolutionsga.com',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423790.8763217462!2d-84.17854299999999!3d33.9188425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a3393f0ddc01%3A0x2289131f610965f5!2sBudget%20Repair%20Solutions!5e0!3m2!1sen!2sin!4v1794109129645!5m2!1sen!2sin',
} as const;

export const telHref = `tel:${BUSINESS.phoneTel}`;

export const locationLabel = `${BUSINESS.city}, ${BUSINESS.region}`;

export function absoluteUrl(path: string) {
  return `${BUSINESS.siteUrl}${path}`;
}
