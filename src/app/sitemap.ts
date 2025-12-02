import { MetadataRoute } from 'next'
import { templateConfig } from '@/config/template-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = templateConfig.site.url
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}${templateConfig.seo.pages.form.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${templateConfig.seo.pages.thankYou.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
