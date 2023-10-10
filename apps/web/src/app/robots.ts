// ロボットがクロールできるページを設定できる
// robots.txtで角煮できる
// robots.txtでも作成できるが、これなら動的に作成できる

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'http://localhost:8080/sitemap.xml',
  };
}
