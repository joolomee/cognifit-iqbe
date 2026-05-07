import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = "CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation",
  description = "Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health with advanced 3D fluid reasoning.",
  url = "https://iqbe.cognifit.com", // Example URL
  image = "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Placeholder for sharing
}: SEOProps) {
  // Advanced JSON-LD Structured Data for the Product
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CogniFit QI Assessment (IQbe)",
    "alternateName": "CogniFit Intelligence Test",
    "url": url,
    "description": "A scientifically validated IQ test and cognitive assessment. Accurately measure your intelligence, brain health, and mental fitness.",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "provider": {
      "@type": "Organization",
      "name": "CogniFit",
      "url": "https://www.cognifit.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.99",
      "priceCurrency": "USD",
      "category": "Premium",
      "availability": "https://schema.org/InStock"
    },
    "keywords": "CogniFit QI Assessment, IQ test, intelligence test, brain test mental, mental health test, IQ intelligence, cognitive assessment",
    "featureList": [
      "Premium IQ Test",
      "CogniFit QI Assessment",
      "Interactive 3D Cube Interface",
      "Non-verbal by design",
      "Low cultural bias",
      "Executive Function Evaluation",
      "Raven's Matrices Based"
    ]
  };

  // Advanced JSON-LD Structured Data for the FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does this intelligence test measure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CogniFit QI Assessment measures fluid intelligence through a non-verbal 3D reasoning task that also places demands on visuospatial processing and executive problem-solving."
        }
      },
      {
        "@type": "Question",
        "name": "Is the CogniFit QI Assessment scientifically validated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This premium IQ test was validated against Raven’s Standard Progressive Matrices and showed a significant positive correlation with Raven-based IQ scores."
        }
      },
      {
        "@type": "Question",
        "name": "Does the test require language comprehension?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The CogniFit QI Assessment is a completely non-verbal intelligence test. All instructions and tasks are designed to be universally understood regardless of your native language, making it highly cross-culturally valid."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the brain test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The IQ test is designed to be completed online in minutes. Duration depends on your performance and how quickly you progress through difficulty levels."
        }
      }
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="CogniFit QI Assessment, IQ test, intelligence test, brain test mental, mental health test, IQ intelligence, premium IQ test, online cognitive assessment, fluid intelligence test, accurate brain test, professional intelligence test, valid IQ score" />
      <meta name="author" content="CogniFit" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CogniFit" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Search Engine Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Safari / Apple iOS SEO & WebKit Optimization */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="CogniFit IQbe" />
      <link rel="apple-touch-icon" href="https://www.cognifit.com/apple-touch-icon.png" />
      <meta name="format-detection" content="telephone=no" />

      {/* AWS / Edge Performance & Preconnects (TTFB Optimization) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.cognifit.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* JSON-LD Schema (Two separate blocks for standard compliance) */}
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}
