import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { primaryNav } from '@/data/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return primaryNav.map((item) => ({
    url: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
