# LinkedIn Clone

A pixel-perfect LinkedIn profile page clone built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Exact replica of LinkedIn profile UI with responsive design
- Interactive components (profile, experience, education sections)
- Functional modals (view profile, sign in, join now)
- Backend API with MongoDB integration
- Course recommendations and related posts sections

## Tech Stack

**Frontend:** React 18, React Router, Tailwind CSS, Axios  
**Backend:** Node.js 22, Express, MongoDB with Mongoose  
**Development:** Vite, ESLint, Nodemon

## Quick Start

### Prerequisites
- Node.js v22.14+
- MongoDB

### Installation

1. **Clone and setup environment**
   ```bash
   git clone https://github.com/yourusername/linkedin-clone.git
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
├── client/              # React frontend
│   ├── src/             # Source code
│   │   ├── components/  # React components (common, layout, profile, modals)
│   │   ├── context/     # Context providers (modals)
│   │   ├── pages/       # Page components
│   │   └── App.jsx      # Main app component
├── server/              # Express backend
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── seeds/           # Database seed scripts
│   └── server.js        # Server entry point
```

## API Endpoints

- `GET /api/profiles` - Get all profiles
- `GET /api/profiles/:username` - Get profile by username
- `POST /api/profiles` - Create/update profile
- `DELETE /api/profiles` - Delete profile

## Deployment

Build the React app with `npm run build` in the client directory, then deploy the backend and serve the static files from the build folder.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

Luca-Teodor Apahidean - [GitHub](https://github.com/apaluca)