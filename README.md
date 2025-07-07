# TODO CRUD API

A complete TODO application with Express.js, MongoDB, and proper architecture (Controller, Service, Model pattern).

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations
- ✅ MongoDB database integration
- ✅ RESTful API design
- ✅ Proper error handling
- ✅ Input validation
- ✅ Toggle todo completion status
- ✅ Priority levels (low, medium, high)
- ✅ Timestamps for created and updated dates

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshil-bodara/cursor-ai-demo.git
   cd cursor-ai-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `config.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   NODE_ENV=development
   ```

4. **Start MongoDB:**
   Make sure MongoDB is running on your system or use MongoDB Atlas.

5. **Run the server:**
   ```bash
   npm start
   ```

## API Endpoints

### Base URL: `http://localhost:3000/api/todos`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| PATCH | `/api/todos/:id/toggle` | Toggle completion status |

## API Examples

### Create a Todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Express.js",
    "description": "Study Express.js framework",
    "priority": "high"
  }'
```

### Get All Todos
```bash
curl http://localhost:3000/api/todos
```

### Update a Todo
```bash
curl -X PUT http://localhost:3000/api/todos/:id \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated title",
    "description": "Updated description"
  }'
```

### Toggle Todo Completion
```bash
curl -X PATCH http://localhost:3000/api/todos/:id/toggle
```

### Delete a Todo
```bash
curl -X DELETE http://localhost:3000/api/todos/:id
```

## Data Model

```javascript
{
  title: String (required, max 100 chars),
  description: String (optional, max 500 chars),
  completed: Boolean (default: false),
  priority: String (enum: 'low', 'medium', 'high', default: 'medium'),
  createdAt: Date,
  updatedAt: Date
}
```

## Project Structure

```
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   └── todoController.js    # HTTP request handlers
├── models/
│   └── Todo.js             # Mongoose schema
├── routes/
│   └── todoRoutes.js       # API routes
├── services/
│   └── todoService.js      # Business logic
├── server.js               # Main application file
├── config.env              # Environment variables
└── README.md              # Documentation
```

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Architecture:** MVC pattern with Service layer
- **Validation:** Mongoose schema validation
- **CORS:** Cross-origin resource sharing enabled

## Development

To run in development mode with auto-restart:
```bash
npm install -g nodemon
nodemon server.js
```

## License

MIT License 