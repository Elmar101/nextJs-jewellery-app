import { siteMetadata } from '@/lib/siteMetaData';
import Head from 'next/head';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: 'About us',
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
  metadataBase: new URL('http://localhost:3000'),
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Doe',
  jobTitle: 'Software Developer',
  telephone: '+994501234567',
  url: 'https://example.com',
};
const AboutPage = () => {
  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      About Page
      <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
    </div>
  );
};

export default AboutPage;
