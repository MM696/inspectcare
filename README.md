# InspectCare

A comprehensive healthcare management platform that helps users track symptoms, manage medications, book appointments, and request ambulance services.

## 🏥 Overview

InspectCare is a full-stack healthcare application designed to provide users with tools for managing their health and medical needs. The platform features symptom assessment, medication reminders, appointment scheduling, and emergency services booking.

## ✨ Features

- **User Authentication**: Secure signup and login with JWT-based authentication
- **Symptom Checker**: Interactive symptom assessment with severity scoring
- **Medication Management**: 
  - Add and track medications
  - Set medication reminders
  - View medication summaries
- **Appointment Booking**: Schedule and manage medical appointments
- **Ambulance Booking**: Request emergency ambulance services
- **Dashboard**: Centralized view of user health information

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
inspectcare/
├── Frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React context providers
│   │   ├── pages/           # Page components
│   │   ├── assets/          # Static assets
│   │   └── App.jsx          # Main app component
│   ├── public/              # Public assets
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Request handlers
│   │   ├── db/              # Database connection
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utility functions
│   │   ├── app.js           # Express app setup
│   │   └── server.js        # Server entry point
│   ├── data/                # Data files
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** (v12 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inspectcare
   ```

2. **Set up the Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-secret-key-here
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=http://localhost:5173
   
   # PostgreSQL Configuration
   PGHOST=localhost
   PGPORT=5432
   PGUSER=postgres
   PGPASSWORD=your-password
   PGDATABASE=inspectcare
   PGSSL=false
   ```

4. **Set up the database**
   - Create a PostgreSQL database named `inspectcare`
   - Run the database migrations/schema (if available)

5. **Set up the Frontend**
   ```bash
   cd ../Frontend
   npm install
   ```

### Running the Application

1. **Start the Backend server**
   ```bash
   cd Backend
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend development server**
   ```bash
   cd Frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Build for production**
   ```bash
   cd Frontend
   npm run build
   npm run preview
   ```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### User Management
- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update user profile (protected)

### Medication Management
- `POST /api/med` - Create medication reminder (protected)
- `PUT /api/med` - Update medication (protected)
- `GET /api/med` - Get user medications (protected)

### Health Check
- `GET /health` - Server health check

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Helmet.js for security headers
- CORS configuration
- Input validation with express-validator
- Protected routes on frontend

## 🧪 Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📝 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRES_IN` - Token expiration time
- `CORS_ORIGIN` - Allowed CORS origins
- `PGHOST` - PostgreSQL host
- `PGPORT` - PostgreSQL port
- `PGUSER` - PostgreSQL user
- `PGPASSWORD` - PostgreSQL password
- `PGDATABASE` - PostgreSQL database name
- `PGSSL` - Enable SSL connection

## 🚢 Deployment

The frontend is configured for GitHub Pages deployment. To deploy:

```bash
cd Frontend
npm run build
npm run deploy
```

For backend deployment, ensure:
- Environment variables are set in your hosting platform
- PostgreSQL database is accessible
- CORS origins are configured for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Flexisaf Team

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for healthcare management and patient care

---

For more information, please refer to the individual README files in the `Frontend` and `Backend` directories.

