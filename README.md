# Quarix

Quarix is a template and website service landing page built with Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Magic UI, Razorpay, Resend, and Supabase Auth.

The site presents available templates, showcase projects, service packages, testimonials, AI agent previews, contact flows, and email notifications for project requests.

## Features

- Responsive landing page with hero, testimonials, services, FAQ, and footer.
- Templates page with checkout and download access.
- Showcase page with project overview pages.
- Services and get-started pages for website project inquiries.
- Dedicated AI Agents, Contact, Privacy, and Terms pages.
- Razorpay checkout for template purchases.
- Resend email integration for service/contact requests and receipts.
- Supabase email/password and GitHub authentication.
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
- Supabase

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

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_key
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
- `SUPABASE_SERVICE_ROLE_KEY` must only be used on the server. Never expose it with a `NEXT_PUBLIC_` prefix.

## Project Structure

- `app/page.tsx` - Home page.
- `app/templates/page.tsx` - Templates listing page.
- `app/showcase/page.tsx` - Showcase gallery page.
- `app/get-access/[template]/page.tsx` - Template checkout page.
- `app/thank-you/[template]/page.tsx` - Template access page.
- `app/services/page.tsx` - Services overview page.
- `app/get-started/[service]/page.tsx` - Service inquiry page.
- `app/api/create-order/route.ts` - Razorpay order creation.
- `app/api/verify-payment/route.ts` - Razorpay signature verification and receipt email.
- `app/api/contact/route.ts` - Project request email endpoint.
- `app/api/auth/sign-up/route.ts` - Server-side confirmed Supabase sign-up.
- `components/` - Shared UI and page components.
- `lib/email.ts` - Resend email helper.

## Deployment

Deploy on Vercel or any platform that supports Next.js App Router. Add the same environment variables in the hosting dashboard before going live.
