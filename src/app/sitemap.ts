
import { MetadataRoute } from 'next';
import { navLinks } from '@/lib/nav-links';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://proteciot.web.app';

  const staticPages = navLinks.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1.0 : 0.8,
  }));

  return [
    ...staticPages,
  ];
}
