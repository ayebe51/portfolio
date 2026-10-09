# Ahmad Ayub Nu'man — Developer Portfolio

Modern, high-performance developer portfolio engineered with **React 18**, **Vite**, and **Tailwind CSS**, optimized for technical recruiters and engineering managers.

Features authentic project case studies, live demo links, interactive galleries, WebP asset optimization, and direct recruiter communication channels (WhatsApp & Email).

---

## 🌟 Featured Engineering Projects

1. **[SIMMACI](https://github.com/ayebe51/simmaci)** — *Enterprise Education Governance Platform*
   * Centralized administrative decree (SK) issuance and institutional governance for 270+ educational institutions, 2,000+ PTK staff, and 17,000+ students.
   * **Tech Stack**: React 19, TypeScript, Laravel 12, PostgreSQL 16, Vite PWA, PHPUnit / Pest.
   * **Live Demo**: [sim-maarif-fullstack.vercel.app](https://sim-maarif-fullstack.vercel.app/dashboard)

2. **[Koneksi Santri](https://github.com/ayebe51/koneksi-santri)** — *Integrated Islamic Boarding School ERP Platform*
   * Comprehensive enterprise platform featuring a closed-loop digital wallet for cashless santri spending with parent spending caps, QR-code Smart Gate security checkouts, automated guardian notification dispatch, and multi-entity accounting.
   * **Tech Stack**: Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma, Closed-Loop Wallet, Tailwind CSS.
   * **Live Demo**: [admin.koneksisantri.tech](https://admin.koneksisantri.tech)

3. **[Enterprise POS & Inventory (Kiro ERP)](https://github.com/ayebe51/inventory-pos)** — *Retail ERP & Omnichannel Point of Sale*
   * Domain-Driven Design (DDD) retail management with an append-only stock movement ledger (WAC/FIFO valuation), cashier terminal, procurement 3-way matching, and general ledger.
   * **Tech Stack**: React 19, NestJS, TypeScript, Prisma, PostgreSQL, Apache ECharts.
   * **Live Demo**: [inventory-pos-hazel.vercel.app](https://inventory-pos-hazel.vercel.app)

---

## 🚀 Tech Stack & Core Tools

* **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, React Icons
* **Backend & Systems**: Laravel, NestJS, PHP, Node.js, Express, PostgreSQL, MySQL, Prisma
* **DevOps & Infrastructure**: Docker, Coolify, Vercel, Git

---

## 🛠️ Local Development

### Prerequisites
* Node.js `>= 18.0.0`
* npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/ayebe51/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build & Preview
```bash
# Build production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Guide

This project produces an optimized static Single Page Application (SPA) in `dist/`.

### 1. Deploy ke Vercel (Rekomendasi Utama)

Karena repositori sudah tersedia di GitHub ([`github.com/ayebe51/portfolio`](https://github.com/ayebe51/portfolio)), Vercel akan otomatis mendeteksi konfigurasi [`vercel.json`](vercel.json):

#### Cara A: Melalui Vercel Dashboard (Paling Praktis)
1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda (**`ayebe51`**).
2. Di dashboard, klik tombol **"Add New..."** > pilih **"Project"**.
3. Cari repositori **`portfolio`** dan klik **"Import"**.
4. Pengaturan build akan otomatis terisi sesuai `vercel.json`:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Klik **"Deploy"**.
6. Selesai! Website Anda langsung aktif dengan domain gratis `*.vercel.app` (dan auto-deploy setiap kali push ke `main`).

#### Cara B: Melalui Vercel CLI
```bash
# 1. Login ke akun Vercel
npx vercel login

# 2. Deploy langsung ke production
npx vercel --prod
```

---

### 2. Deploy ke Coolify (Self-Hosted VPS)

Jika ingin di-hosting di server/VPS mandiri menggunakan **Coolify**:

#### Opsi Nixpacks / Static Site (Direkomendasikan)
1. Di **Coolify Dashboard**, klik **"+ Create New Resource"** > **"Public/Private Git Repository"**.
2. Masukkan URL repositori: `https://github.com/ayebe51/portfolio.git`.
3. Pilih **Build Pack**: `Static` atau `Nixpacks`.
4. Konfigurasi:
   * **Build Command**: `npm run build`
   * **Publish Directory**: `dist`
5. Masukkan custom domain (misal: `portfolio.ayub.dev` atau `ayub.dev`) dan aktifkan SSL otomatis Let's Encrypt.
6. Klik **Deploy**.

#### Opsi Dockerfile / Nginx
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📬 Contact Information

* **Developer**: Ahmad Ayub Nu'man
* **Role Focus**: Full-Stack Developer & Software Engineer
* **WhatsApp**: [+62 895-3491-77555](https://wa.me/62895349177555)
* **Email**: [ayb.n1994@gmail.com](mailto:ayb.n1994@gmail.com)
* **GitHub**: [github.com/ayebe51](https://github.com/ayebe51)

---

## 📄 License

This repository is maintained by [Ahmad Ayub Nu'man](https://github.com/ayebe51). All rights reserved.
