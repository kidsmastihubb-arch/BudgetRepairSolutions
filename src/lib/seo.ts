import { useEffect } from 'react';
import { BUSINESS, absoluteUrl } from '@/config/business';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
}

function setMeta(key: string, value: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function setBusinessSchema(url: string) {
  let script = document.getElementById('business-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'business-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: BUSINESS.name,
    url,
    telephone: BUSINESS.phoneTel,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: 'US',
    },
    hasMap: BUSINESS.mapsUrl,
    areaServed: { '@type': 'State', name: BUSINESS.regionName },
    contactPoint: { '@type': 'ContactPoint', telephone: BUSINESS.phoneTel, contactType: 'customer service' },
  });
}

export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const url = absoluteUrl(path);
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', BUSINESS.name, 'property');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    setBusinessSchema(url);
  }, [title, description, path]);
}
