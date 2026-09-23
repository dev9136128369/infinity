# Infinity Real Estate — Website

Real estate company ki public website + admin dashboard (property listings). Do parts hain:

- **`Client/`** — React 19 + Vite frontend (Home, About, Residential/Commercial/Leasing property pages, Blog, Testimonials, Contact, Login, Admin Dashboard, Privacy/Terms/Disclaimer)
- **`Server/`** — Node.js + Express backend (MongoDB/Mongoose, GridFS property images, JWT auth **with an actual middleware this time** — see Known Issues for a serious gap in how it's used)

---

## Tech Stack

| Layer | Stack |
|---|---|
| Frontend | React 19, Vite 7, React Router 7, Bootstrap 5, Swiper (carousels), FontAwesome |
| Backend | Node.js, Express 5, Mongoose 8 (MongoDB), GridFS (property image storage), JWT auth, bcryptjs, Multer (uploads, memory storage), Nodemailer (contact form email) |
| DB | MongoDB |


---

## Prerequisites

- Node.js 18+
- MongoDB connection string
- Gmail account + App Password (Nodemailer, for contact/sticky-widget emails)

---

## Environment Variables

`Server/.env` is present in this zip with real values for some of these — rotate them before reusing on a fresh environment.

```
PORT=5000
MONGODB_URI=
ADMIN_EMAIL=
EMAIL_USER=
EMAIL_PASS=
JWT_SECRET=          # ⚠️ NOT actually set in the provided .env — see Known Issues, this is urgent
```

Client:
```
VITE_API_URL=
```

---

## Local Setup

### Backend
```bash
cd Server
npm install
node index.js         # or: npx nodemon index.js
```

### Frontend
```bash
cd Client
npm install
npm run dev             # Vite dev server
npm run build             # production build -> Client/dist
npm run preview           # preview the production build locally
```
Verified: fresh `npm install` + `npm run build` completes cleanly with good code-splitting per route.

---

## Key API Routes (backend)

| Route | Auth | Notes |
|---|---|---|
| `POST /api/auth/login` | — | "Universal" login: logs in an existing user, **or silently creates a new one** if the email doesn't exist yet (see critical issue) |
| `GET /api/admin/products` | public | list properties (fine — it's a public catalog) |
| `GET /api/admin/image/:filename` | public | serve a property image from GridFS |
| `POST /api/admin/products` | 🔒 `auth` middleware | create property listing |
| `PUT/DELETE /api/admin/products/:id` | 🔒 `auth` middleware | update/delete listing |
| `POST /api/contact` | — | contact form -> email |
| `POST /` (sticky routes) | — | sticky-widget lead capture -> email |

**Good to see**: unlike some of the other codebases in this batch, the property create/update/delete routes here *are* actually wrapped with the `auth` middleware — that part is done correctly.

---

## Known Issues / Follow-ups

### 🔴 Critical — the admin account can be silently taken over by whoever logs in first
`routes/auth.js`'s `/login` handler does this: it looks up the user by email; **if no user with that email exists yet, it creates one on the spot using whatever password was submitted in the request**, and if the email matches `ADMIN_EMAIL` (default `support@infinityrealestate.estate`, and this address is visible in the source code), the new account is created with `userType: 'admin'` — no verification step at all.

Practically: on a fresh database (or if the real admin has simply never logged in yet), **the first person to submit a login request with the admin's email address and any password of their choosing becomes the permanent admin**, and every login after that just checks their password against the one they picked. The `password: { minlength: 3 }` comment in `models/User.js` ("Minimal requirement for auto-creation") shows this was a deliberate design choice, but it's not safe for an admin account.

Fix direction: never auto-create a user for `ADMIN_EMAIL` — the admin account should be seeded manually (a one-time script or a `findOne` that returns 403 if it doesn't already exist), and auto-creation (if wanted at all) should be limited to non-admin `userType`s.

### 🔴 Critical — JWT secret falls back to a hardcoded value that's checked into source
Both `routes/auth.js` and `middleware/auth.js` sign/verify tokens with:
```js
process.env.JWT_SECRET || 'infinity-secret-key'
```
The `.env` file provided in this zip **does not set `JWT_SECRET`**, meaning the deployed app is very likely signing every token with the literal string `'infinity-secret-key'` — which is now sitting in this README's analysis and in the source itself. Anyone who has seen the code knows the exact secret used to sign admin tokens. Add `JWT_SECRET` to `.env` with a long random value, and remove the hardcoded fallback entirely (fail startup if the env var is missing, don't silently fall back).

Combined, these two issues mean the admin panel currently has close to no real protection — this should be the first thing fixed before this app is trusted with real property data or exposed publicly with an empty/reset database.

### Other notes
- `middleware/auth.js` has verbose `console.log` calls that print the full request headers (including the raw `Authorization` header / bearer token) on every authenticated request. Fine for local debugging, but strip this before production — it'll leak tokens into server logs.
- `Client` fresh `npm install` reports 19 vulnerabilities (1 critical) via `npm audit` — review before production.
- `saveLoginHistory()` in `routes/auth.js` only `console.log`s the login record — it's not actually persisted anywhere despite the name suggesting it is.

---

## Deployment Notes

1. **Fix the two critical auth issues above before any public/production deploy** — as-is, admin access is not meaningfully protected.
2. **Backend**: deploy `Server/` as a Node web service; set `MONGODB_URI`, `ADMIN_EMAIL`, `EMAIL_USER`, `EMAIL_PASS`, and (critically) a strong random `JWT_SECRET` as platform env vars.
3. **Frontend**: static site; `npm run build`, serve `Client/dist`, set `VITE_API_URL` at build time to point at the deployed backend.
4. Manually create the real admin user in MongoDB (matching `ADMIN_EMAIL`) *before* first deploying to a fresh database, so the auto-creation gap above can't be exploited even before the code fix lands.
