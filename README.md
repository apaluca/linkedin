# LinkedIn Clone

A pixel-perfect LinkedIn profile page clone built with the MERN stack (MongoDB, Express, React, Node.js) that accurately reproduces the LinkedIn user experience, including profile viewing, authentication flows, and interactive components.

## Features

- Exact replica of LinkedIn profile UI with responsive design
- Complete authentication flow (login, signup, and Google authentication)
- Interactive components (profile, experience, education sections)
- Functional modals (view profile, sign in, join now)
- Backend API with MongoDB integration
- Course recommendations and related posts sections
- Mobile-responsive design with app download prompts
- Visit tracking functionality with fingerprinting
- Realistic Google authentication popup simulation

## Tech Stack

**Frontend:**
- React 18.2.0
- React Router 6.16.0
- Tailwind CSS 3.3.5
- Axios for API requests

**Backend:**
- Node.js 22.14+
- Express 4.18.2
- MongoDB with Mongoose 7.5.3
- CORS for cross-origin support
- GeoIP-lite for location tracking

**Development:**
- Vite for frontend development
- ESLint for code quality
- Nodemon for server auto-restart
- Environment variable management with dotenv

## Quick Start

### Prerequisites
- Node.js v22.14+
- MongoDB

### Installation

1. **Clone and setup environment**
   ```bash
   git clone https://github.com/apaluca/linkedin-clone.git
   cd linkedin-clone
   cp .env.example .env
   # Update .env with your MongoDB URI
   ```

2. **Install dependencies & seed database**
   ```bash
   # Server setup
   cd server
   npm install
   node seeds/profileSeeds.js
   
   # Client setup
   cd ../client
   npm install
   ```

3. **Run the application**
   ```bash
   # Start backend (from server directory)
   npm run dev
   
   # Start frontend (from client directory)
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api

## Project Structure

```
linkedin-clone/
├── client/                # React frontend
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   │   ├── common/    # Shared UI components
│   │   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   │   ├── modals/    # Modal components
│   │   │   └── profile/   # Profile page components
│   │   ├── context/       # Context providers
│   │   ├── pages/         # Page components (Profile, Login, Signup)
│   │   ├── utils/         # Utility functions (fingerprinting, OAuth)
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static files
│   ├── index.html         # HTML template
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── vite.config.js     # Vite configuration
├── server/                # Express backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   │   ├── profileController.js  # Profile endpoints
│   │   ├── trackerController.js  # Tracking functionality
│   │   └── userController.js     # User authentication
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── seeds/             # Database seed scripts
│   └── server.js          # Server entry point
```

## API Endpoints

### Profiles
- `GET /api/profiles` - Get all profiles
- `GET /api/profiles/:username` - Get profile by username
- `POST /api/profiles` - Create/update profile
- `DELETE /api/profiles` - Delete profile

### Authentication
- `POST /api/users/login` - Handle user login
- `POST /api/users/signup` - Handle user signup
- `POST /api/users/google-auth` - Handle Google authentication

### Tracking
- `POST /api/tracker/profile-visit` - Track profile visits with browser fingerprinting

## Deployment

Build the React app with `npm run build` in the client directory, then deploy the backend and serve the static files from the build folder.

For production deployment, consider:
- Setting up proper environment variables
- Implementing HTTPS
- Configuring MongoDB security settings
- Using a process manager like PM2

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

Luca-Teodor Apahidean - [GitHub](https://github.com/apaluca)