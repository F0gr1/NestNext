# Next.js + NestJS Social Media Application

A modern social networking application built with Next.js for the frontend and NestJS for the backend.

## Project Structure

- `frontend/`: Next.js application
- `backend/`: NestJS application
- `docker-compose.yml`: Docker configuration for the whole stack

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started with Docker

1. Clone the repository
2. Start the application:

```bash
docker-compose up
```

3. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api
   - API Documentation: http://localhost:3001/api/docs

## Local Development Setup

### Frontend (Next.js)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at http://localhost:3000.

### Backend (NestJS)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run start:dev
```

The backend will be available at http://localhost:3001.

## Database Setup

When running locally (without Docker), you need to configure PostgreSQL:

1. Install PostgreSQL
2. Create a database named `sns_db`
3. Update the `.env` file in the backend directory with your database credentials

## Documentation

For more information, refer to the documentation in the `index.md` file.

## License

[MIT License](LICENSE)
