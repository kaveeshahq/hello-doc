import { useEffect } from 'react';

const MetaTags = ({ 
  title = "Hello.doc - Your Trusted Healthcare Partner",
  description = "Book appointments with verified doctors, get online consultations, and manage your healthcare seamlessly with Hello.doc.",
  keywords = "doctor appointment, online consultation, healthcare, medical services, book doctor, health checkup",
  image = "/hello-doc-og-image.jpg",
  url = typeof window !== 'undefined' ? window.location.href : "",
  type = "website"
}) => {
  const siteName = "Hello.doc";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (property, content, useProperty = false) => {
      const selector = useProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let metaTag = document.querySelector(selector);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (useProperty) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', property);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      
      if (linkTag) {
        linkTag.setAttribute('href', href);
      } else {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        linkTag.setAttribute('href', href);
        document.head.appendChild(linkTag);
      }
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Hello.doc Team');
    updateMetaTag('robots', 'index, follow');

    // Open Graph Meta Tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@hellodoc');
    updateMetaTag('twitter:creator', '@hellodoc');

    // Additional Meta Tags
    updateMetaTag('theme-color', '#2563eb');
    updateMetaTag('msapplication-TileColor', '#2563eb');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', siteName);

    // Canonical URL
    updateLinkTag('canonical', url);

  }, [title, description, keywords, image, url, type, fullTitle, siteName]);

  return null; 
};

export default MetaTags;