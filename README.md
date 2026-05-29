# Quarix

Quarix is a premium template and website service landing page built with Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Magic UI, Razorpay, and Resend.

The site showcases ready-made templates, service packages, testimonials, a responsive checkout flow, post-payment thank-you pages, downloadable template access, and email notifications for both project requests and payment receipts.

## Features

- Responsive landing page with hero, showcase, testimonials, services, FAQ, and footer.
- Templates page with live preview actions and checkout entry points.
- Razorpay Standard Checkout integration with server-side order creation and payment signature verification.
- Thank-you page after payment with confetti, template preview, source-code download, and live preview actions.
- Test Mode Template for previewing the thank-you page without payment.
- Resend email integration for service/contact requests and payment receipt emails.
- Cmd/Ctrl + K search palette.
- Light and dark theme support.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Magic UI
- Razorpay
- Resend

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local `.env` file:

```env
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Quarix <verified-sender@yourdomain.com>

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Important Notes

- Do not commit `.env`; it contains private API keys.
- Resend requires a verified sender/domain for production email delivery.
- Razorpay secret keys must only be used on the server.
- The downloadable files in `public/downloads` are placeholders and should be replaced with real template packages before production use.

## Project Structure

- `app/page.tsx` - Home page.
- `app/templates/page.tsx` - Template listing page.
- `app/get-access/[template]/page.tsx` - Checkout page.
- `app/thank-you/[template]/page.tsx` - Post-payment access page.
- `app/get-started/[service]/page.tsx` - Service inquiry page.
- `app/api/create-order/route.ts` - Razorpay order creation.
- `app/api/verify-payment/route.ts` - Razorpay signature verification and receipt email.
- `app/api/contact/route.ts` - Project request email endpoint.
- `components/` - Shared UI and page components.
- `lib/email.ts` - Resend email helper.

## Deployment

Deploy on Vercel or any platform that supports Next.js App Router. Add the same environment variables in the hosting dashboard before going live.
