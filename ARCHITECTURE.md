# Two Peaks Chai Co. — Architecture

## Overview

Two Peaks Chai Co. is a Next.js 16 (App Router) ecommerce site for a premium Colorado chai brand. It supports product browsing, a cart, Stripe-powered checkout, Shippo shipping rate quotes, and a password-protected admin dashboard.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Cart state | Zustand (persisted to localStorage) |
| Payments | Stripe |
| Shipping | Shippo |
| Email | Resend |
| Hosting | Vercel |

## Directory Structure

```
src/
  app/                    # Next.js App Router pages + API routes
    api/
      checkout/           # Stripe checkout session creation
      webhooks/stripe/    # Stripe webhook handler
      shipping/rates/     # Shippo rate quotes
      admin/login/        # Admin auth
    admin/                # Admin dashboard (password protected)
    shop/                 # Shop listing + product detail pages
    about/                # About page
    ritual/               # Ritual/brewing guide
    checkout/             # Checkout page
    privacy/              # Privacy policy
    terms/                # Terms of service
    shipping/             # Shipping policy
    sitemap.ts            # Dynamic XML sitemap
    robots.ts             # robots.txt
  components/
    layout/               # Header, Footer
    shop/                 # ProductCard, CartSidebar, SortSelect
    ui/                   # Button
  data/                   # Static product data
  lib/                    # Stripe, Shippo, Resend clients + utils
  store/                  # Zustand cart store
  types/                  # TypeScript interfaces
```

## Key Flows

### Order Flow

1. Customer adds items to cart (Zustand, persisted to localStorage)
2. Customer navigates to `/checkout`, fills in shipping info
3. `POST /api/checkout` creates a Stripe Checkout Session
4. Customer completes payment on Stripe-hosted checkout
5. Stripe fires a webhook to `/api/webhooks/stripe` on successful payment
6. Order fulfillment: pull shipping label from Shippo using the customer's shipping address

### Shipping

- Rates are fetched from Shippo via `POST /api/shipping/rates`
- Free standard shipping on orders ≥ $45
- Falls back to mock rates in development when `SHIPPO_API_KEY` is not set

### Admin

- Password protected via `httpOnly` cookie set on `POST /api/admin/login`
- Dashboard shows inventory sourced from static product data
- Future: connect to a database for live order management

## Environment Variables

See `.env.example` for all required variables.

## Deployment

1. Set all environment variables in the Vercel dashboard
2. Add a Stripe webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Events to listen for: `checkout.session.completed`
3. Deploy to Vercel (automatic with GitHub integration)

## Future Work (Phase 2+)

- **Database** (Cloudflare D1 or Postgres) for live order management
- **Email automation** (order confirmation, shipping notification) via Resend
- **Customer accounts** with order history
- **CMS integration** for blog/content (e.g., Sanity or Contentlayer)
- **Review system** for product pages
- **Abandoned cart recovery** via email
