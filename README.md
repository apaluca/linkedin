# MERN Stack Project Template

A minimal, ready-to-use MERN stack project template with modern tooling and best practices.

## Technologies

- **MongoDB** - with Mongoose v7.5.3
- **Express** - v4.18.2
- **React** - v18.2.0
- **Node.js** - v22.14
- **Tailwind CSS** - v3.3.5
- **Vite** - For fast React development and building

## Features

- 📁 Clean project structure following best practices
- 🚀 Optimized development workflow with Vite
- 🎨 Tailwind CSS for utility-first styling
- 📱 Responsive design ready
- 🔄 Hot module replacement for rapid development
- 🧩 Modular architecture for easy scaling
- 🛣️ React Router for client-side routing
- 🔌 Proxy setup for seamless API communication
- 🔒 Environment variable management

## Project Structure

```
mern-template/
├── client/                 # React frontend (Vite)
│   ├── index.html          # Main HTML template
│   ├── public/             # Static files
│   │   └── vite.svg        # Favicon
│   ├── src/                # React source code
│   │   ├── App.jsx         # Main React component
│   │   ├── index.css       # Global styles (Tailwind imports)
│   │   └── main.jsx        # React entry point
│   ├── .eslintrc.cjs       # ESLint configuration
│   ├── package.json        # Client dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── vite.config.js      # Vite configuration
├── server/                 # Express backend
│   ├── config/             # Configuration files
│   │   └── db.js           # Database connection
│   ├── models/             # Mongoose models
│   │   └── .gitkeep        # Placeholder
│   ├── routes/             # Express routes
│   │   └── api.js          # API routes
│   ├── controllers/        # Route controllers
│   │   └── .gitkeep        # Placeholder
│   ├── middleware/         # Custom middleware
│   │   └── .gitkeep        # Placeholder
│   ├── server.js           # Server entry point
│   ├── package.json        # Server dependencies
│   └── .npmrc              # Node.js configuration
├── .gitignore              # Git ignore file
├── .env.example            # Example environment variables
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js v22.14
- MongoDB (local or Atlas)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/apaluca/mern-template.git
   cd mern-template
   ```

2. Install server dependencies
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. Start the backend server
   ```bash
   # In the server directory
   npm run dev
   ```

2. Start the frontend development server
   ```bash
   # In the client directory
   npm run dev
   ```

3. Access the application
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api

## Development

### Adding a New Feature

1. Create any necessary models in `/server/models/`
2. Define routes in `/server/routes/`
3. Update routing in `/client/src/App.jsx`

### Building for Production

1. Build the client
   ```bash
   # In the client directory
   npm run build
   ```

2. Set NODE_ENV to production in your .env file
   ```
   NODE_ENV=production
   ```

3. Start the server
   ```bash
   # In the server directory
   npm start
   ```

## Best Practices Followed

- **Backend**:
  - Separation of concerns (routes, controllers, models)
  - Environment variable management
  - Error handling
  - MongoDB best practices with Mongoose

- **Frontend**:
  - Component-based architecture
  - Modern React patterns
  - Responsive design with Tailwind
  - Optimized builds with Vite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)