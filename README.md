This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
robohan-hp
├─ app
│  ├─ about
│  │  ├─ about.module.css
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ global.css
│  ├─ home.module.css
│  ├─ join
│  │  ├─ join.module.css
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ news
│  │  ├─ news.module.css
│  │  ├─ page.tsx
│  │  └─ [slug]
│  │     ├─ page.tsx
│  │     └─ post.module.css
│  ├─ page.tsx
│  └─ supporters
│     ├─ page.tsx
│     └─ supporters.module.css
├─ components
│  ├─ CycleSlider.module.css
│  ├─ CycleSlider.tsx
│  ├─ Footer.module.css
│  ├─ Footer.tsx
│  ├─ Header.module.css
│  ├─ Header.tsx
│  ├─ hooks
│  │  └─ useScrollDirection.tsx
│  ├─ news
│  │  ├─ NewsCard.module.css
│  │  ├─ NewsCard.tsx
│  │  ├─ NewsContainer.module.css
│  │  ├─ NewsContainer.tsx
│  │  ├─ NewsGrid.module.css
│  │  └─ NewsGrid.tsx
│  ├─ PageLinkButton.module.css
│  ├─ PageLinkButton.tsx
│  ├─ Pagination.module.css
│  ├─ Pagination.tsx
│  ├─ ResponsiveImage.module.css
│  ├─ ResponsiveImage.tsx
│  ├─ SNSLinkButton.module.css
│  ├─ SNSLinkButton.tsx
│  └─ supporters
│     ├─ BronzeSponsorCard.tsx
│     ├─ GoldSponsorCard.tsx
│     ├─ NormalSupporterCard.tsx
│     ├─ SilverSponsorCard.tsx
│     ├─ SponsorCard.module.css
│     ├─ SponsorGrid.module.css
│     └─ SponsorGrid.tsx
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ posts
│  ├─ 20260301.md
│  ├─ 20260302.md
│  ├─ 20260303.md
│  ├─ 20260304.md
│  ├─ README.md
│  └─ template.md
├─ public
│  ├─ favicons
│  │  ├─ android-chrome-144x144.png
│  │  ├─ android-chrome-192x192.png
│  │  ├─ android-chrome-36x36.png
│  │  ├─ android-chrome-48x48.png
│  │  ├─ android-chrome-72x72.png
│  │  ├─ android-chrome-96x96.png
│  │  ├─ apple-touch-icon-114x114.png
│  │  ├─ apple-touch-icon-120x120.png
│  │  ├─ apple-touch-icon-144x144.png
│  │  ├─ apple-touch-icon-152x152.png
│  │  ├─ apple-touch-icon-180x180.png
│  │  ├─ apple-touch-icon-57x57.png
│  │  ├─ apple-touch-icon-60x60.png
│  │  ├─ apple-touch-icon-72x72.png
│  │  ├─ apple-touch-icon-76x76.png
│  │  ├─ apple-touch-icon-precomposed.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ browserconfig.xml
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon-96x96.png
│  │  ├─ favicon.ico
│  │  ├─ manifest.json
│  │  ├─ mstile-144x144.png
│  │  ├─ mstile-150x150.png
│  │  ├─ mstile-310x150.png
│  │  ├─ mstile-310x310.png
│  │  ├─ mstile-70x70.png
│  │  └─ safari-pinned-tab.svg
│  └─ images
│     ├─ about
│     │  ├─ DSC_6140.JPG
│     │  ├─ DSC_6142.JPG
│     │  ├─ IMG_4179.JPG
│     │  ├─ kairo1.png
│     │  ├─ kairo2.png
│     │  ├─ kairo3.jpg
│     │  ├─ kikou1.png
│     │  ├─ kikou2.JPG
│     │  ├─ kikou3.jpg
│     │  ├─ natsurobo.JPG
│     │  ├─ seigyo1.png
│     │  ├─ seigyo2.png
│     │  └─ seigyo3.png
│     ├─ hero_gray.jpg
│     ├─ join
│     │  ├─ craftbase.png
│     │  ├─ esa.png
│     │  └─ seminar.jpg
│     ├─ logos
│     │  ├─ logo.png
│     │  ├─ logo_R.png
│     │  ├─ logo_R_bronze.png
│     │  ├─ logo_R_gold.png
│     │  ├─ logo_R_silver.png
│     │  └─ Robohan_black(no logo, full).png
│     ├─ news
│     │  └─ 20260301
│     │     ├─ DSC_6140.JPG
│     │     ├─ DSC_6142.JPG
│     │     ├─ IMG_4179.JPG
│     │     ├─ IMG_4213.JPG
│     │     ├─ kikou2.JPG
│     │     └─ practice.jpg
│     ├─ NoImage.png
│     └─ sponsors
│        ├─ CFi.png
│        ├─ FUJIYA.png
│        ├─ HAGIWARA.jpg
│        ├─ HAKKO_ロゴ.png
│        ├─ HOKUYO.png
│        ├─ ISHIDA.png
│        ├─ JLCPCB.png
│        ├─ mabuchi_motor_resized.jpg
│        ├─ NACHI_logo_isolation.jpg
│        ├─ NKC.jpg
│        ├─ NoImage.png
│        ├─ Roborise.png
│        ├─ Rohm.jpg
│        ├─ scramble.png
│        ├─ SMC.jpg
│        ├─ ST.png
│        └─ synchron.jpg
├─ README.md
└─ tsconfig.json

```
```
robohan-hp
├─ app
│  ├─ about
│  │  ├─ about.module.css
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ global.css
│  ├─ home.module.css
│  ├─ join
│  │  ├─ join.module.css
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ news
│  │  ├─ news.module.css
│  │  ├─ page.tsx
│  │  └─ [slug]
│  │     ├─ page.tsx
│  │     └─ post.module.css
│  ├─ page.tsx
│  └─ supporters
│     ├─ page.tsx
│     └─ supporters.module.css
├─ components
│  ├─ Footer.module.css
│  ├─ Footer.tsx
│  ├─ Header.module.css
│  ├─ Header.tsx
│  ├─ home
│  │  ├─ CycleSlider.module.css
│  │  ├─ CycleSlider.tsx
│  │  ├─ PageLinkButton.module.css
│  │  ├─ PageLinkButton.tsx
│  │  ├─ SNSLinkButton.module.css
│  │  └─ SNSLinkButton.tsx
│  ├─ hooks
│  │  └─ useScrollDirection.tsx
│  ├─ news
│  │  ├─ NewsCard.module.css
│  │  ├─ NewsCard.tsx
│  │  ├─ NewsContainer.module.css
│  │  ├─ NewsContainer.tsx
│  │  ├─ NewsGrid.module.css
│  │  ├─ NewsGrid.tsx
│  │  ├─ Pagination.module.css
│  │  └─ Pagination.tsx
│  ├─ ResponsiveImage.module.css
│  ├─ ResponsiveImage.tsx
│  └─ supporters
│     ├─ BronzeSponsorCard.tsx
│     ├─ GoldSponsorCard.tsx
│     ├─ NormalSupporterCard.tsx
│     ├─ SilverSponsorCard.tsx
│     ├─ SponsorCard.module.css
│     ├─ SponsorGrid.module.css
│     └─ SponsorGrid.tsx
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ posts
│  ├─ 20260301.md
│  ├─ 20260302.md
│  ├─ 20260303.md
│  ├─ 20260304.md
│  ├─ README.md
│  └─ template.md
├─ public
│  ├─ favicons
│  │  ├─ android-chrome-144x144.png
│  │  ├─ android-chrome-192x192.png
│  │  ├─ android-chrome-36x36.png
│  │  ├─ android-chrome-48x48.png
│  │  ├─ android-chrome-72x72.png
│  │  ├─ android-chrome-96x96.png
│  │  ├─ apple-touch-icon-114x114.png
│  │  ├─ apple-touch-icon-120x120.png
│  │  ├─ apple-touch-icon-144x144.png
│  │  ├─ apple-touch-icon-152x152.png
│  │  ├─ apple-touch-icon-180x180.png
│  │  ├─ apple-touch-icon-57x57.png
│  │  ├─ apple-touch-icon-60x60.png
│  │  ├─ apple-touch-icon-72x72.png
│  │  ├─ apple-touch-icon-76x76.png
│  │  ├─ apple-touch-icon-precomposed.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ browserconfig.xml
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon-96x96.png
│  │  ├─ favicon.ico
│  │  ├─ manifest.json
│  │  ├─ mstile-144x144.png
│  │  ├─ mstile-150x150.png
│  │  ├─ mstile-310x150.png
│  │  ├─ mstile-310x310.png
│  │  ├─ mstile-70x70.png
│  │  └─ safari-pinned-tab.svg
│  └─ images
│     ├─ about
│     │  ├─ DSC_6140.JPG
│     │  ├─ DSC_6142.JPG
│     │  ├─ IMG_4179.JPG
│     │  ├─ kairo1.png
│     │  ├─ kairo2.png
│     │  ├─ kairo3.jpg
│     │  ├─ kikou1.png
│     │  ├─ kikou2.JPG
│     │  ├─ kikou3.jpg
│     │  ├─ natsurobo.JPG
│     │  ├─ seigyo1.png
│     │  ├─ seigyo2.png
│     │  └─ seigyo3.png
│     ├─ home
│     │  └─ hero_gray.jpg
│     ├─ join
│     │  ├─ craftbase.png
│     │  ├─ esa.png
│     │  └─ seminar.jpg
│     ├─ logos
│     │  ├─ logo.png
│     │  ├─ logo_R.png
│     │  ├─ logo_R_bronze.png
│     │  ├─ logo_R_gold.png
│     │  ├─ logo_R_silver.png
│     │  └─ Robohan_black(no logo, full).png
│     ├─ news
│     │  └─ 20260301
│     │     ├─ DSC_6140.JPG
│     │     ├─ DSC_6142.JPG
│     │     ├─ IMG_4179.JPG
│     │     ├─ IMG_4213.JPG
│     │     ├─ kikou2.JPG
│     │     └─ practice.jpg
│     ├─ NoImage.png
│     └─ sponsors
│        ├─ CFi.png
│        ├─ FUJIYA.png
│        ├─ HAGIWARA.jpg
│        ├─ HAKKO_ロゴ.png
│        ├─ HOKUYO.png
│        ├─ ISHIDA.png
│        ├─ JLCPCB.png
│        ├─ mabuchi_motor_resized.jpg
│        ├─ NACHI_logo_isolation.jpg
│        ├─ NKC.jpg
│        ├─ NoImage.png
│        ├─ Roborise.png
│        ├─ Rohm.jpg
│        ├─ scramble.png
│        ├─ SMC.jpg
│        ├─ ST.png
│        └─ synchron.jpg
├─ README.md
└─ tsconfig.json

```
```
robohan-hp
├─ app
│  ├─ about
│  │  ├─ about.module.css
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ global.css
│  ├─ home.module.css
│  ├─ join
│  │  ├─ join.module.css
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ news
│  │  ├─ news.module.css
│  │  ├─ page.tsx
│  │  └─ [slug]
│  │     ├─ page.tsx
│  │     └─ post.module.css
│  ├─ page.tsx
│  └─ supporters
│     ├─ page.tsx
│     └─ supporters.module.css
├─ components
│  ├─ Footer.module.css
│  ├─ Footer.tsx
│  ├─ Header.module.css
│  ├─ Header.tsx
│  ├─ home
│  │  ├─ CycleSlider.module.css
│  │  ├─ CycleSlider.tsx
│  │  ├─ PageLinkButton.module.css
│  │  ├─ PageLinkButton.tsx
│  │  ├─ SNSLinkButton.module.css
│  │  └─ SNSLinkButton.tsx
│  ├─ hooks
│  │  └─ useScrollDirection.tsx
│  ├─ news
│  │  ├─ NewsCard.module.css
│  │  ├─ NewsCard.tsx
│  │  ├─ NewsContainer.module.css
│  │  ├─ NewsContainer.tsx
│  │  ├─ NewsGrid.module.css
│  │  ├─ NewsGrid.tsx
│  │  ├─ Pagination.module.css
│  │  └─ Pagination.tsx
│  ├─ ResponsiveImage.module.css
│  ├─ ResponsiveImage.tsx
│  └─ supporters
│     ├─ BronzeSponsorCard.tsx
│     ├─ GoldSponsorCard.tsx
│     ├─ NormalSupporterCard.tsx
│     ├─ SilverSponsorCard.tsx
│     ├─ SponsorCard.module.css
│     ├─ SponsorGrid.module.css
│     └─ SponsorGrid.tsx
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ posts
│  ├─ 20260301.md
│  ├─ 20260302.md
│  ├─ 20260303.md
│  ├─ 20260304.md
│  ├─ README.md
│  └─ template.md
├─ public
│  ├─ favicons
│  │  ├─ android-chrome-144x144.png
│  │  ├─ android-chrome-192x192.png
│  │  ├─ android-chrome-36x36.png
│  │  ├─ android-chrome-48x48.png
│  │  ├─ android-chrome-72x72.png
│  │  ├─ android-chrome-96x96.png
│  │  ├─ apple-touch-icon-114x114.png
│  │  ├─ apple-touch-icon-120x120.png
│  │  ├─ apple-touch-icon-144x144.png
│  │  ├─ apple-touch-icon-152x152.png
│  │  ├─ apple-touch-icon-180x180.png
│  │  ├─ apple-touch-icon-57x57.png
│  │  ├─ apple-touch-icon-60x60.png
│  │  ├─ apple-touch-icon-72x72.png
│  │  ├─ apple-touch-icon-76x76.png
│  │  ├─ apple-touch-icon-precomposed.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ browserconfig.xml
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon-96x96.png
│  │  ├─ favicon.ico
│  │  ├─ manifest.json
│  │  ├─ mstile-144x144.png
│  │  ├─ mstile-150x150.png
│  │  ├─ mstile-310x150.png
│  │  ├─ mstile-310x310.png
│  │  ├─ mstile-70x70.png
│  │  └─ safari-pinned-tab.svg
│  └─ images
│     ├─ about
│     │  ├─ DSC_6140.JPG
│     │  ├─ DSC_6142.JPG
│     │  ├─ IMG_4179.JPG
│     │  ├─ kairo1.png
│     │  ├─ kairo2.png
│     │  ├─ kairo3.jpg
│     │  ├─ kikou1.png
│     │  ├─ kikou2.JPG
│     │  ├─ kikou3.jpg
│     │  ├─ natsurobo.JPG
│     │  ├─ seigyo1.png
│     │  ├─ seigyo2.png
│     │  └─ seigyo3.png
│     ├─ home
│     │  └─ hero_gray.jpg
│     ├─ join
│     │  ├─ craftbase.png
│     │  ├─ esa.png
│     │  └─ seminar.jpg
│     ├─ logos
│     │  ├─ logo.png
│     │  ├─ logo_R.png
│     │  ├─ logo_R_bronze.png
│     │  ├─ logo_R_gold.png
│     │  ├─ logo_R_silver.png
│     │  └─ Robohan_black(no logo, full).png
│     ├─ news
│     │  └─ 20260301
│     │     ├─ DSC_6140.JPG
│     │     ├─ DSC_6142.JPG
│     │     ├─ IMG_4179.JPG
│     │     ├─ IMG_4213.JPG
│     │     ├─ kikou2.JPG
│     │     └─ practice.jpg
│     ├─ NoImage.png
│     └─ sponsors
│        ├─ CFi.png
│        ├─ FUJIYA.png
│        ├─ HAGIWARA.jpg
│        ├─ HAKKO_ロゴ.png
│        ├─ HOKUYO.png
│        ├─ ISHIDA.png
│        ├─ JLCPCB.png
│        ├─ mabuchi_motor_resized.jpg
│        ├─ NACHI_logo_isolation.jpg
│        ├─ NKC.jpg
│        ├─ NoImage.png
│        ├─ Roborise.png
│        ├─ Rohm.jpg
│        ├─ scramble.png
│        ├─ SMC.jpg
│        ├─ ST.png
│        └─ synchron.jpg
├─ README.md
└─ tsconfig.json

```