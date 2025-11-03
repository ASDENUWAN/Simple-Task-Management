# Simple-Task-Management

Simple CRUD service for managing tasks, built with **Express**, **Mongoose**, and **ES Modules**.  
Project follows the structure used in previous company backends (config/controllers/models/routes/services).

---

## Tech Stack

- Node.js, Express
- MongoDB, Mongoose
- dotenv, cors
- express-validator (request validation)
- nodemon (dev runner)

---

## Project Structure

```markdown
src
├─ config
│ └─ db.js
├─ controllers
│ └─ task.controller.js
├─ middlewares
│ ├─ error.middleware.js
│ └─ validate.middleware.js
├─ models
│ └─ Task.js
├─ routes
│ └─ task.routes.js
├─ services
│ └─ task.service.js
└─ server.js
.env.example
.env
```

---

## Prerequisites

- Node.js 18+
- MongoDB running locally (or a cloud URI)
- Git

---

## Setup (Local)

1. Clone & install
   git clone <your-repo-url>
   cd <repo>
   npm install

2. Environment variables
   Create a `.env` file at the repo root (or copy from `.env.example`):
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/task_api_dev
   NODE_ENV=development

3. Run the app
   npm run dev # Dev (auto-reload with nodemon)
   npm start # Prod

   App starts on http://localhost:5000.

---

## API Endpoints

Base URL: http://localhost:5000

### Health

GET / → "API is running..."

### Create Task

POST /api/tasks

```
Body:
{
"title": "Write README",
"description": "include setup + curl samples",
"status": "pending"
}
```

### List Tasks

GET /api/tasks

### Get Task by ID

GET /api/tasks/:id

### Delete Task

DELETE /api/tasks/:id

---

```

```
