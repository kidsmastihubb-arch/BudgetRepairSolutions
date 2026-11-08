import { BUSINESS } from '@/config/business';

export interface ServiceArea {
  slug: string;
  city: string;
  intro: string[];
  customerNeeds: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: BUSINESS.locationSlug,
    city: BUSINESS.city,
    intro: [
      `${BUSINESS.city} is the county seat of Gwinnett County, with a mix of older single-family neighborhoods, newer subdivisions, townhomes, and small businesses. Homes and buildings here see long, humid summers and cold snaps in winter, which puts steady demand on both cooling and heating equipment.`,
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}. Calling the office is the fastest way to confirm whether a specific neighborhood or property is within the current service area and which service fits your situation.`,
    ],
    customerNeeds: [
      'Air conditioners that struggle during humid summer afternoons',
      'Furnaces and heat pumps that need attention before cold weather',
      'Aging systems in older homes that need an honest repair-or-replace conversation',
      'Light commercial spaces that need dependable heating and cooling service',
    ],
    faqs: [
      {
        question: 'Do you serve my specific neighborhood in Lawrenceville?',
        answer: 'Call the office with your address and the service you need. The team can confirm coverage before a visit is scheduled.',
      },
      {
        question: 'Do you service commercial properties as well as homes?',
        answer: 'Call to describe the property and equipment. The team can tell you whether the work is something they handle.',
      },
    ],
  },
  {
    slug: 'snellville-ga',
    city: 'Snellville',
    intro: [
      'Snellville sits in Gwinnett County and is known for its established residential streets, shopping corridors, and a steady flow of family homes. Many of these homes were built decades apart, so the heating and cooling systems in them vary widely in age and design.',
      `Budget Repair Solutions serves ${BUSINESS.city}-area customers from its main location. Call to confirm coverage for your Snellville address and the service you need.`,
    ],
    customerNeeds: [
      'Older split systems that cool unevenly from room to room',
      'Heat pumps that need a check before the cold months',
      'Thermostats that drift from the set temperature',
      'Routine tune-ups for homes with pets and high summer use',
    ],
    faqs: [
      {
        question: 'Can you look at an older system in a Snellville home?',
        answer: 'Yes, if the equipment is within the services we offer. Call with the age and brand if you know it so the team can prepare.',
      },
      {
        question: 'Do you handle thermostat problems in Snellville?',
        answer: 'Thermostat installation and repair is one of our listed services. Call to describe the issue and confirm the visit.',
      },
    ],
  },
  {
    slug: 'lilburn-ga',
    city: 'Lilburn',
    intro: [
      'Lilburn is a Gwinnett County community with tree-lined neighborhoods and a mix of ranch homes and two-story houses. Shaded yards and older ductwork in some homes can make airflow a common concern during the summer.',
      `From our main location in ${BUSINESS.city}, ${BUSINESS.region}, we help Lilburn homeowners and property owners understand their options. Call to confirm whether your address is within our current coverage.`,
    ],
    customerNeeds: [
      'Weak airflow from aging ductwork',
      'Air conditioners that run long cycles during summer afternoons',
      'Furnaces that need service before the first cold snap',
      'Maintenance plans for systems that have not been checked in years',
    ],
    faqs: [
      {
        question: 'Why does my Lilburn home have weak airflow?',
        answer: 'Causes include a clogged filter, a dirty coil, damaged ducts, or a blower issue. A technician can test the system to find the cause.',
      },
      {
        question: 'Do you service heat pumps in Lilburn?',
        answer: 'Yes, heat pump repair and installation are among our services. Call to confirm the equipment and visit.',
      },
    ],
  },
  {
    slug: 'duluth-ga',
    city: 'Duluth',
    intro: [
      'Duluth is a growing Gwinnett County city with busy commercial corridors, office buildings, and many newer homes. Both residential and light commercial properties here depend on reliable rooftop and split systems through hot and cold seasons.',
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}, and works with customers in nearby communities. Call to confirm whether your Duluth property is within our current service area.`,
    ],
    customerNeeds: [
      'Rooftop and split systems on small commercial properties',
      'Newer homes with heat pumps that need routine checks',
      'Tenant spaces that need heating or cooling fixed quickly',
      'Thermostat and control problems in multi-zone buildings',
    ],
    faqs: [
      {
        question: 'Do you work on commercial HVAC in Duluth?',
        answer: 'Call to describe the building and equipment. The team can confirm whether the job is something we handle.',
      },
      {
        question: 'What should I do if my Duluth office is too hot?',
        answer: 'Call and describe what the system is doing, including any noises or areas that are much warmer than others.',
      },
    ],
  },
  {
    slug: 'suwanee-ga',
    city: 'Suwanee',
    intro: [
      'Suwanee is a Gwinnett County city known for its parks, schools, and planned neighborhoods. Many homes here have larger floor plans, which means balanced airflow and correctly sized equipment matter more than simply having a unit that runs.',
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}. Call to find out whether your Suwanee address is within our service area and which HVAC service is right for your home.`,
    ],
    customerNeeds: [
      'Larger homes with rooms that never reach the set temperature',
      'Furnace repair before the heating season starts',
      'New installations sized for bigger floor plans',
      'Tune-ups that keep systems efficient through heavy use',
    ],
    faqs: [
      {
        question: 'Why are some rooms in my Suwanee home harder to heat or cool?',
        answer: 'Duct layout, insulation, and airflow often explain it. A technician can check the system before recommending changes.',
      },
      {
        question: 'Can you size a new system for a larger Suwanee home?',
        answer: 'Sizing depends on the home itself, not only square footage. Call to schedule a review of your property.',
      },
    ],
  },
  {
    slug: 'loganville-ga',
    city: 'Loganville',
    intro: [
      'Loganville is a city in the Atlanta metro area with a small-town feel, older downtown buildings, and newer subdivisions on its outskirts. Homes here often have a mix of system ages, so a single visit can reveal both simple tune-up needs and components near the end of their life.',
      `Budget Repair Solutions works from ${BUSINESS.city}-area coverage based in ${BUSINESS.city}, ${BUSINESS.region}. Call to confirm whether your Loganville address is within our current service area.`,
    ],
    customerNeeds: [
      'Older systems that need a clear repair-or-replace answer',
      'Furnace and heat pump checks before winter',
      'Air conditioners that short-cycle on hot days',
      'Small businesses that need dependable heating and cooling',
    ],
    faqs: [
      {
        question: 'Do you service older homes in Loganville?',
        answer: 'Yes, if the system is within the services we provide. The team can explain repair options for older equipment.',
      },
      {
        question: 'How do I know if my Loganville system needs a tune-up?',
        answer: 'Signs include higher energy bills, uneven temperatures, and unusual noises. Call to schedule an inspection.',
      },
    ],
  },
  {
    slug: 'grayson-ga',
    city: 'Grayson',
    intro: [
      'Grayson is a community in Gwinnett County with a mix of residential neighborhoods and nearby commercial centers. Homes in the area often range from newer builds to properties that have been updated over several decades.',
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}, and serves nearby communities from there. Call to confirm coverage for your Grayson property.`,
    ],
    customerNeeds: [
      'Heat pumps that need a check during cold mornings',
      'Air conditioners with warm air at certain vents',
      'Replacement planning for systems at the end of their life',
      'Thermostat setup and repair for households with busy schedules',
    ],
    faqs: [
      {
        question: 'Do you serve Grayson addresses?',
        answer: 'Call with your address so the team can confirm coverage before scheduling a visit.',
      },
      {
        question: 'Why is only one vent in my Grayson home blowing warm air?',
        answer: 'That can point to ductwork, a damper, or a blocked register. Call so a technician can check the airflow to that room.',
      },
    ],
  },
  {
    slug: 'dacula-ga',
    city: 'Dacula',
    intro: [
      'Dacula is a Gwinnett County community with a rural edge, larger lots, and homes that often sit farther apart than in denser suburbs. Longer runs of ductwork and more exposed outdoor equipment are common here, which affects how systems perform.',
      `From our main location in ${BUSINESS.city}, ${BUSINESS.region}, we help Dacula-area homeowners and property owners discuss their heating and cooling needs. Call to confirm service for your address.`,
    ],
    customerNeeds: [
      'Long duct runs that lose air before it reaches far rooms',
      'Outdoor units exposed to weather and debris',
      'Furnaces and heat pumps needing service before cold snaps',
      'Installations sized for larger homes on bigger lots',
    ],
    faqs: [
      {
        question: 'Do you handle rural-style properties in Dacula?',
        answer: 'Call and describe the property, the equipment, and the access. The team can confirm whether the visit can be arranged.',
      },
      {
        question: 'Why does my Dacula home lose heat so quickly?',
        answer: 'Leaking ducts, weak insulation, and an undersized or failing furnace are common causes. A technician can test the system to find out which applies.',
      },
    ],
  },
  {
    slug: 'norcross-ga',
    city: 'Norcross',
    intro: [
      'Norcross is a Gwinnett County city with a historic downtown, busy business districts, and a wide range of residential and commercial buildings. Many of these properties rely on heating and cooling equipment that works hard year-round.',
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}. Call to confirm whether your Norcross address or business is within our current service area.`,
    ],
    customerNeeds: [
      'Office and retail spaces with uneven temperatures',
      'Heating systems that need repair before the holiday season',
      'Air conditioners that struggle during long summer days',
      'Thermostat problems in buildings with several zones',
    ],
    faqs: [
      {
        question: 'Do you service businesses in Norcross?',
        answer: 'Call to describe the property and the equipment. The team can tell you whether the work is something they handle.',
      },
      {
        question: 'My Norcross office is too hot in the afternoon. What should I do?',
        answer: 'Call and describe when the problem happens and which areas are affected. This helps the technician plan the visit.',
      },
    ],
  },
  {
    slug: 'atlanta-ga',
    city: 'Atlanta',
    intro: [
      'Atlanta is the state capital and one of the largest metro areas in the Southeast, with everything from historic homes to high-rise offices. Systems here vary enormously in age, size, and design, so every property needs an individual look.',
      `Budget Repair Solutions is based in ${BUSINESS.city}, ${BUSINESS.region}, and serves customers across the wider metro area. Call to confirm whether your Atlanta address is within our current service area.`,
    ],
    customerNeeds: [
      'Older Atlanta homes with mixed or outdated heating and cooling',
      'Apartment and condo systems that need reliable repairs',
      'Commercial spaces that need heating and cooling restored quickly',
      'Heat pumps and furnaces that need service before seasonal changes',
    ],
    faqs: [
      {
        question: 'Do you serve every Atlanta neighborhood?',
        answer: 'Coverage is confirmed by address. Call with your location and the service you need, and the team will confirm.',
      },
      {
        question: 'Can you help with a commercial property in Atlanta?',
        answer: 'Call to describe the building and equipment. The team can tell you whether the job is one they can take on.',
      },
    ],
  },
];

export function findServiceAreaBySlug(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}
