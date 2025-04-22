# Docker NestJS, NextJS, PostgreSQL, and Nginx Application

A full-stack application using:

- **Frontend**: NextJS
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Web Server**: Nginx

## Quick Start

1. Clone this repository
2. Run the application with Docker Compose:

```bash
docker-compose up
```

3. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost/api

## Project Structure

```
.
├── frontend/                # NextJS frontend
├── backend/                 # NestJS backend
├── nginx/                   # Nginx configuration
└── docker-compose.yml       # Docker Compose configuration
```

## Development

### Frontend (NextJS)

The frontend is located in the `frontend/` directory. It's a NextJS application that communicates with the backend API.

### Backend (NestJS)

The backend is located in the `backend/` directory. It's a NestJS application that provides the API for the frontend and connects to the PostgreSQL database.

### Database (PostgreSQL)

The PostgreSQL database is managed by Docker Compose. The data is persisted in a Docker volume.

### Web Server (Nginx)

Nginx is used as a reverse proxy to route requests to the frontend and backend services.

## Production Deployment

For production deployment, make sure to update the environment variables and configure proper security settings in Nginx.
