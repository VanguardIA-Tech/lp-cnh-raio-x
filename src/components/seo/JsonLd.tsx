import { templateConfig } from "@/config/template-config";

interface JsonLdProps {
  type?: "organization" | "website" | "webpage";
  url?: string;
  name?: string;
  description?: string;
}

export function JsonLd({ 
  type = "organization", 
  url,
  name,
  description 
}: JsonLdProps) {
  const baseUrl = templateConfig.site.url;
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": templateConfig.branding.companyName,
    "url": baseUrl,
    "logo": `${baseUrl}${templateConfig.seo.logo}`,
    "description": templateConfig.site.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": templateConfig.branding.whatsappNumber,
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": [templateConfig.site.language]
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": templateConfig.site.title,
    "url": baseUrl,
    "description": templateConfig.site.description,
    "publisher": {
      "@type": "Organization",
      "name": templateConfig.branding.companyName
    },
    "inLanguage": templateConfig.site.language,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name || templateConfig.site.title,
    "description": description || templateConfig.site.description,
    "url": url || baseUrl,
    "inLanguage": templateConfig.site.language,
    "isPartOf": {
      "@type": "WebSite",
      "url": baseUrl
    }
  };

  let schema;
  if (type === "website") {
    schema = websiteSchema;
  } else if (type === "webpage") {
    schema = webpageSchema;
  } else {
    schema = organizationSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}
