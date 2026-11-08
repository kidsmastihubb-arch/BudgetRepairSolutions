import {
  ClipboardCheck,
  Flame,
  Gauge,
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { BUSINESS } from '@/config/business';

export type ServiceTag = 'cooling' | 'heating';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  tags: ServiceTag[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  summary: string;
  intro: string;
  problems: string[];
  workIncluded: string[];
  faqs: ServiceFaq[];
}

export const SERVICES: Service[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    tags: ['cooling'],
    icon: Snowflake,
    image: 'https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Outdoor air conditioning condenser unit mounted on a brick wall',
    summary: 'Diagnosis and repair when your air conditioner runs but no longer cools the way it should.',
    intro:
      'When an air conditioner stops cooling, the cause is often a specific component: a weak refrigerant charge, a failing capacitor, a clogged coil, or a condensate drain that has backed up. Repair starts with finding which part is failing so you are not replacing parts that still work.',
    problems: ['Warm air blowing from vents', 'Unit runs but never reaches the set temperature', 'Ice forming on refrigerant lines or indoor coil'],
    workIncluded: [
      'Checking refrigerant pressures and charge',
      'Testing capacitors, contactors, and fan motors',
      'Cleaning or repairing condenser and evaporator coils',
      'Clearing condensate drain lines',
    ],
    faqs: [
      {
        question: 'Why is my AC running but not cooling?',
        answer:
          'Common causes include low refrigerant from a leak, a dirty condenser coil, a failing capacitor, or a frozen evaporator coil. A technician needs to check pressures and airflow to tell them apart.',
      },
      {
        question: 'Should I repair or replace an old air conditioner?',
        answer:
          'It depends on the age of the system, the cost of the repair, and how often it has needed service. A technician can walk you through the options so you can decide with the facts in front of you.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    name: 'Air Conditioning Installation',
    tags: ['cooling'],
    icon: Wind,
    image: 'https://images.pexels.com/photos/34887522/pexels-photo-34887522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wall-mounted air conditioner installed on a concrete wall',
    summary: 'Planning and installing a new air conditioning system sized for the home it will serve.',
    intro:
      'An air conditioner is only as good as its fit. Equipment that is too large short-cycles and wastes energy, while a unit that is too small runs constantly and never catches up on hot afternoons. Installation begins with a load review of the home, then matches the outdoor and indoor equipment so they work together.',
    problems: ['Aging system that no longer keeps rooms comfortable', 'Rooms that are consistently hotter than the rest of the house', 'Rising energy bills from an inefficient unit'],
    workIncluded: [
      'Reviewing the home to size the system',
      'Setting the outdoor condenser and indoor coil',
      'Connecting refrigerant lines, electrical, and condensate drain',
      'Checking refrigerant charge and airflow before handoff',
    ],
    faqs: [
      {
        question: 'How do I know what size air conditioner my home needs?',
        answer:
          'Size depends on the home’s layout, insulation, windows, and climate exposure, not just square footage. A proper load review is the reliable way to determine the right capacity.',
      },
      {
        question: 'Can you replace only the outdoor unit?',
        answer:
          'Sometimes, but the indoor coil and outdoor unit must be compatible. A technician can check the existing components before recommending a partial or full replacement.',
      },
    ],
  },
  {
    slug: 'hvac-repair',
    name: 'HVAC Repair',
    tags: ['cooling', 'heating'],
    icon: Wrench,
    image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician using a manifold gauge to repair an outdoor air conditioner',
    summary: 'Repairs for heating and cooling systems when a single system is not performing as expected.',
    intro:
      'Many HVAC problems show up as comfort issues: uneven rooms, strange sounds, or a system that cycles on and off. Because the heating and cooling halves share the same airflow and controls, a repair often means looking at the whole system rather than one part in isolation.',
    problems: ['System cycles on and off frequently', 'Unusual noises from the indoor or outdoor unit', 'Some rooms are much hotter or colder than others'],
    workIncluded: [
      'Full-system diagnostic check',
      'Electrical component testing and replacement',
      'Airflow and duct inspection at the supply and return points',
      'Thermostat and control verification',
    ],
    faqs: [
      {
        question: 'My system turns on and off all the time. Is that a problem?',
        answer:
          'Frequent cycling can point to an airflow restriction, an oversized unit, a faulty sensor, or a control problem. It is worth having it checked before it leads to larger failures.',
      },
      {
        question: 'Do you repair both heating and cooling?',
        answer:
          'Yes. HVAC repair covers the full system, so a single visit can address a problem on either side of the equipment.',
      },
    ],
  },
  {
    slug: 'hvac-installation',
    name: 'HVAC Installation',
    tags: ['cooling', 'heating'],
    icon: Thermometer,
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern condenser unit installed on the exterior wall of a building',
    summary: 'Complete heating and cooling system installation, matched and sized for your building.',
    intro:
      'A full HVAC installation replaces both the heating and cooling equipment, and it is the best time to correct duct or airflow problems that were holding back the old system. Planning the layout, equipment match, and ductwork together helps the new system perform as a single, balanced unit.',
    problems: ['Heating and cooling both struggling with age', 'Frequent repairs on a system nearing the end of its life', 'Comfort problems that a new layout would address'],
    workIncluded: [
      'Load review and equipment selection',
      'Removal of existing equipment',
      'Installation of furnace or air handler, coil, and outdoor unit',
      'Startup testing and handoff walkthrough',
    ],
    faqs: [
      {
        question: 'How long does a full HVAC installation take?',
        answer:
          'Timing depends on the equipment and the amount of duct and electrical work required. A technician can provide a clearer timeline after reviewing your home.',
      },
      {
        question: 'Will I need new ductwork?',
        answer:
          'Not always. If the existing ducts are sound and correctly sized, they can often be reused. Damaged or undersized ducts should be addressed during the installation.',
      },
    ],
  },
  {
    slug: 'heating-repair',
    name: 'Heating Repair',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician adjusting a heating system with precise instruments',
    summary: 'Repairs that restore reliable heat when your home is not warming up properly.',
    intro:
      'Heating problems range from a simple thermostat setting to a failed ignition or a cracked heat exchanger. Because some heating faults involve gas or combustion safety, diagnosis focuses first on identifying and correcting safety-critical issues before restoring normal operation.',
    problems: ['Heat stops or only blows lukewarm air', 'Burner or ignition fails to light', 'Strange smells or popping sounds when the heat starts'],
    workIncluded: [
      'Ignition and burner inspection',
      'Gas valve and flame sensor testing',
      'Blower motor and control board diagnostics',
      'Safety checks on venting and heat exchanger',
    ],
    faqs: [
      {
        question: 'My heat stopped working. What should I check first?',
        answer:
          'Confirm the thermostat is set to heat and the filter is not clogged. If the system still does not respond, call for service rather than repeatedly restarting it.',
      },
      {
        question: 'Is a burning smell from my heating system normal?',
        answer:
          'A brief dust burn-off when the heat first starts can be normal. A persistent burning, rotten egg, or gas smell is not, and the system should be turned off and inspected promptly.',
      },
    ],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/3736108/pexels-photo-3736108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician working on a furnace unit',
    summary: 'Focused furnace diagnostics and repair for gas and electric furnaces.',
    intro:
      'A furnace moves heat through the whole house, so a fault in the burner, blower, or controls is felt in every room. Furnace repair focuses on identifying the failed part, confirming that safety switches and venting are working, and restoring steady heat.',
    problems: ['Furnace short-cycles or shuts off early', 'Blower runs but air is not warm', 'Error codes or a blinking control light'],
    workIncluded: [
      'Burner, igniter, and flame sensor service',
      'Inducer and pressure switch testing',
      'Blower wheel and motor inspection',
      'Replacement of worn parts such as capacitors and relays',
    ],
    faqs: [
      {
        question: 'Why does my furnace keep shutting off?',
        answer:
          'Short cycling is often caused by overheating from restricted airflow, a dirty flame sensor, or a faulty limit switch. Each has a different fix, so a technician should confirm the cause.',
      },
      {
        question: 'How do I know if my furnace is worth repairing?',
        answer:
          'Factors include the furnace age, the cost of the repair, and how often it has been serviced. A technician can help you weigh repair against replacement.',
      },
    ],
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    tags: ['heating'],
    icon: Flame,
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician installing a heating system in a workshop',
    summary: 'New furnace installation sized to your home and matched to your existing ductwork.',
    intro:
      'Choosing a new furnace involves more than picking a brand. Capacity, fuel type, venting, and the existing ductwork all affect how well the furnace heats your home and how safely it operates. Installation is planned around those factors.',
    problems: ['Furnace older than its expected service life', 'Uneven heating between floors or rooms', 'Repeated repairs on the same heating system'],
    workIncluded: [
      'Heat load review and furnace sizing',
      'Removal and disposal of the old furnace',
      'Gas, electrical, and venting connections',
      'Startup testing for combustion and airflow',
    ],
    faqs: [
      {
        question: 'What size furnace do I need?',
        answer:
          'Furnace size is based on how much heat your home loses, which depends on insulation, windows, and climate. Oversized furnaces cycle often and wear out sooner.',
      },
      {
        question: 'Can a new furnace work with my existing ducts?',
        answer:
          'Often yes, provided the ducts are in good condition and sized correctly for the new equipment. A technician can check before any work begins.',
      },
    ],
  },
  {
    slug: 'heat-pump-repair',
    name: 'Heat Pump Repair',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/38067323/pexels-photo-38067323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern heat pump outdoor unit beside a contemporary building',
    summary: 'Repair for heat pumps that heat in winter and cool in summer.',
    intro:
      'A heat pump moves heat in both directions, so it depends on its reversing valve, defrost cycle, and refrigerant balance to work in every season. When one of these fails, it can feel like heating or cooling is missing, even though the equipment is still running.',
    problems: ['Heat pump runs but air feels cool in winter', 'Ice buildup on the outdoor unit', 'Auxiliary or emergency heat running too often'],
    workIncluded: [
      'Reversing valve and defrost control testing',
      'Refrigerant pressure and charge checks',
      'Outdoor coil and fan inspection',
      'Electrical and control troubleshooting',
    ],
    faqs: [
      {
        question: 'Is some frost on my heat pump normal in winter?',
        answer:
          'Light frost that clears during the defrost cycle is normal. Heavy ice that does not melt, or ice that stays on the unit all day, indicates a problem that should be checked.',
      },
      {
        question: 'Why does my heat pump use so much backup heat?',
        answer:
          'Backup heat engages when the heat pump cannot keep up, often due to low refrigerant, a defrost fault, or a failing component. Diagnosis can confirm which one.',
      },
    ],
  },
  {
    slug: 'heat-pump-installation',
    name: 'Heat Pump Installation',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Outdoor air source unit mounted on a residential building',
    summary: 'Heat pump installation that provides both heating and cooling from one system.',
    intro:
      'A heat pump can replace separate heating and cooling equipment in many homes, but it must be sized carefully for winter performance as well as summer cooling. Installation includes matching the indoor unit, outdoor unit, and controls so the system transitions smoothly between seasons.',
    problems: ['Separate heating and cooling systems nearing replacement', 'Desire to reduce reliance on fossil fuel heating', 'Need for one system that handles both seasons'],
    workIncluded: [
      'Heating and cooling load review',
      'Outdoor unit placement and mounting',
      'Refrigerant line and electrical connections',
      'Defrost, reversing, and control setup',
    ],
    faqs: [
      {
        question: 'Can a heat pump handle very cold winters?',
        answer:
          'Modern heat pumps perform well in many climates, but the right model and backup heat setup depend on local conditions. Sizing should account for your typical winter temperatures.',
      },
      {
        question: 'Will a heat pump lower my energy bills?',
        answer:
          'It can, especially when it replaces older, less efficient equipment. Actual savings vary with the home, the system, and how it is used.',
      },
    ],
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance and Tune-Ups',
    tags: ['cooling', 'heating'],
    icon: ClipboardCheck,
    image: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting an outdoor HVAC unit during a maintenance visit',
    summary: 'Seasonal tune-ups that keep heating and cooling running efficiently and catch small problems early.',
    intro:
      'Routine maintenance is the most effective way to prevent surprise breakdowns. A tune-up checks the parts that wear quietly over time, such as belts, coils, and electrical connections, and it helps the system run closer to its designed efficiency.',
    problems: ['Dusty or dirty coils and blower components', 'Heating and cooling bills climbing without a clear reason', 'No service record for an aging system'],
    workIncluded: [
      'Seasonal inspection of heating and cooling',
      'Coil, filter, and blower cleaning',
      'Electrical connection and wear checks',
      'Performance readings and a summary of findings',
    ],
    faqs: [
      {
        question: 'How often should my system be serviced?',
        answer:
          'Many homes benefit from a tune-up before each heating and cooling season. Your system’s age and usage may call for a different schedule.',
      },
      {
        question: 'Does maintenance replace the need for repairs?',
        answer:
          'It reduces the likelihood of many common failures but cannot prevent every breakdown. It does make problems easier to spot before they become emergencies.',
      },
    ],
  },
  {
    slug: 'thermostat-installation',
    name: 'Thermostat Installation and Repair',
    tags: ['cooling', 'heating'],
    icon: Gauge,
    image: 'https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting a vent and airflow in a building interior',
    summary: 'Thermostat installation and repair so your system responds to the temperatures you set.',
    intro:
      'A thermostat is the control point for your entire system. When it reads temperatures incorrectly, loses power, or fails to call for heat or cooling, the equipment can run at the wrong times or not at all. Installation and repair ensure the thermostat and equipment communicate correctly.',
    problems: ['Display is blank or unresponsive', 'Temperature reading is far from the actual room temperature', 'System does not respond to changes on the thermostat'],
    workIncluded: [
      'Thermostat installation and wiring checks',
      'Replacement of faulty thermostats',
      'Verification of heating and cooling calls',
      'Setup and walkthrough of schedule and modes',
    ],
    faqs: [
      {
        question: 'Can any thermostat work with my system?',
        answer:
          'Not always. Thermostats must match the number of heating and cooling stages and the wiring present in the wall. A technician can confirm compatibility.',
      },
      {
        question: 'My thermostat is blank. Does that mean the system is broken?',
        answer:
          'Not necessarily. The thermostat may have lost power or have dead batteries, but a wiring or transformer fault can also cause it. Diagnosis can identify the cause.',
      },
    ],
  },
];

export function findServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function serviceUrl(service: Service) {
  return `/${service.slug}-${BUSINESS.locationSlug}`;
}

export function servicesWithTag(tag: ServiceTag) {
  return SERVICES.filter((service) => service.tags.includes(tag));
}
