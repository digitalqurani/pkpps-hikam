# PKPPS Hikam (Demo) - Next.js App Router + Tailwind + Dummy Auth

This is a ready-to-use project skeleton for **PKPPS Hikam**:
- Next.js (App Router)
- TailwindCSS
- lucide-react icons
- Dummy client-side authentication (choose role at login)
- Dynamic sidebar per role (ADMIN, GURU, SANTRI, PUBLIK)
- Simple layouts for admin/guru/santri

## Quick start (locally)

1. Extract the zip and install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Open http://localhost:3000

## Login (dummy)

Go to `/login`. Choose a role (ADMIN/GURU/SANTRI/PUBLIK). This demo **does not** use a real backend or database — it sets a client-side user state for demonstration only.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Create a new project in Vercel and import from GitHub.
3. Vercel will auto-detect Next.js and set up build.
4. Environment variables: none required for this dummy demo.
5. Deploy.

## Notes

- This project is a skeleton/demo. For production, replace dummy auth with NextAuth (or Firebase), add a real database (Prisma + Postgres), and secure uploads/assets.
- Files included are intentionally simple to help you get started quickly.

Enjoy — kalau mau, saya bisa lanjut buatkan versi lengkap dengan NextAuth + Prisma + seed data.
