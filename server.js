const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './config.env' });

const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/todos', todoRoutes);

// Social Media Post Design Route
app.get('/posts', (req, res) => {
  res.render('index');
});

// Health check route
app.get('/', (req, res) => {
  res.json({
    message: 'TODO API is running',
    routes: {
      'GET /posts': 'View social media post design',
      'GET /api/todos': 'Get all todos',
      'GET /api/todos/:id': 'Get single todo',
      'POST /api/todos': 'Create new todo',
      'PUT /api/todos/:id': 'Update todo',
      'DELETE /api/todos/:id': 'Delete todo',
      'PATCH /api/todos/:id/toggle': 'Toggle todo completion'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}`);
  console.log(`Social Media Posts: http://localhost:${PORT}/posts`);
}); 