# InspectCare Backend

RESTful authentication API supporting the InspectCare React frontend. The service now uses PostgreSQL for persistence while keeping the same endpoints consumed by the frontend:

- `POST /api/user/create` – register a new account (mirrors `SignupForm.jsx` fields)
- `POST /api/auth/login` – authenticate an existing user
- `GET /api/auth/profile` – retrieve the authenticated user profile (JWT required)

## Quick start

```bash
cd Backend
npm install
cp env.example .env       # configure Postgres details
npm run dev               # starts server on http://localhost:5000
```

### Environment variables (`.env`)

You can provide either a fully qualified `DATABASE_URL` or individual connection values:

```
PORT=5000
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=please-change-me
JWT_EXPIRES_IN=7d

# Option A: single connection string
# DATABASE_URL=postgres://user:password@localhost:5432/inspectcare

# Option B: individual connection parameters
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=inspectcare
PGSSL=false
```

## Project structure

```text
Backend/
├── env.example             # sample env vars
├── package.json            # Express + pg dependencies
└── src/
    ├── app.js              # Express app configuration
    ├── config/             # environment helpers
    ├── controllers/        # auth + user logic
    ├── db/                 # Postgres pool + migrations
    ├── middleware/         # async, error, auth helpers
    ├── models/             # database access layer
    ├── routes/             # API routes
    ├── utils/token.js      # JWT helpers
    └── server.js           # bootstrap + DB init
```

## Database

- Uses the official `pg` driver with connection pooling.
- `initializeDatabase()` automatically creates the `users` table if it does not exist.
- Connection supports SSL (set `PGSSL=true` for managed providers).

### Default schema

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  fullname TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## API contracts

### Register – `POST /api/user/create`

```json
{
  "fullname": "Ada Lovelace",
  "email": "ada@example.com",
  "username": "adal",
  "password": "secret123",
  "confirmPassword": "secret123",
  "agreed": true
}
```

### Login – `POST /api/auth/login`

```json
{
  "email": "ada@example.com",
  "password": "secret123"
}
```

Both responses return an object containing `jwtToken` and the sanitized user payload (matching the expectations in the frontend context).

## Development tips

- Ensure your Postgres instance is running and credentials are correct before starting the backend.
- The frontend currently points to `https://health-inspector.onrender.com`; update fetch URLs if you want to test against the local API.
- Add additional tables/migrations by extending `initializeDatabase()` or introducing a migration tool if the schema grows.

Happy coding! 🚀

