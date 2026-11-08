import type { ReactNode } from 'react';
import { BUSINESS } from '@/config/business';
import { AboutPage, ContactPage, ReviewsPage } from '@/pages/InfoPages';
import { AreaDetailPage, ServiceAreasPage } from '@/pages/AreaPages';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ServiceListPage } from '@/pages/ServiceListPage';
import { findServiceAreaBySlug } from '@/data/areas';
import { SERVICES, findServiceBySlug, servicesWithTag } from '@/data/services';

const LOCATION_SUFFIX = `-${BUSINESS.locationSlug}`;

export function renderRoute(path: string): ReactNode {
  const route = path.length > 1 ? path.replace(/\/+$/, '') : path;

  switch (route) {
    case '/':
      return <HomePage />;
    case '/hvac-services':
      return (
        <ServiceListPage
          path="/hvac-services"
          title={`HVAC Services in ${BUSINESS.regionName} | ${BUSINESS.name}`}
          description={`Browse HVAC repair, installation, and maintenance services from ${BUSINESS.name}. Call directly to discuss your system.`}
          eyebrow="HVAC Services"
          heading="Heating, cooling, and ventilation services"
          intro="Browse our HVAC services, from repairs and tune-ups to full system installation. Each service has its own page with the common problems we see and answers to frequent questions."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'HVAC Services' }]}
          services={SERVICES}
        />
      );
    case '/air-conditioning-services':
      return (
        <ServiceListPage
          path="/air-conditioning-services"
          title={`Air Conditioning Repair and Installation | ${BUSINESS.name}`}
          description={`Air conditioning repair and installation from ${BUSINESS.name}. Call to describe weak cooling, noises, or thermostat problems.`}
          eyebrow="Air Conditioning"
          heading="Air conditioning repair and installation"
          intro="When your home is not cooling the way it should, the problem could be refrigerant, airflow, electrical parts, or controls. Explore our cooling services and call to talk through what your system is doing."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Air Conditioning' }]}
          services={servicesWithTag('cooling')}
        />
      );
    case '/heating-services':
      return (
        <ServiceListPage
          path="/heating-services"
          title={`Heating Repair and Furnace Services | ${BUSINESS.name}`}
          description={`Heating repair, furnace repair, and heat pump service from ${BUSINESS.name}. Call directly to discuss your heating system.`}
          eyebrow="Heating"
          heading="Heating repair, furnace, and heat pump services"
          intro="Cold weather is when heating problems matter most. Explore our heating services, from furnace repair and installation to heat pump service, and call to confirm what your system needs."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Heating' }]}
          services={servicesWithTag('heating')}
        />
      );
    case '/service-areas':
      return <ServiceAreasPage />;
    case '/about':
      return <AboutPage />;
    case '/reviews':
      return <ReviewsPage />;
    case '/contact':
      return <ContactPage />;
  }

  if (route.endsWith(LOCATION_SUFFIX)) {
    const serviceSlug = route.slice(1, route.length - LOCATION_SUFFIX.length);
    const service = findServiceBySlug(serviceSlug);
    if (service) return <ServiceDetailPage service={service} />;
  }

  const area = findServiceAreaBySlug(route.slice(1));
  if (area) return <AreaDetailPage area={area} />;

  return <NotFoundPage />;
}
