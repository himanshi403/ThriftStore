const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

// Import routes
const tshirtRoutes = require('./routes/tshirtRoutes');
const partyTopRoutes = require('./routes/partyTopRoutes');
const trouserRoutes = require('./routes/trouserRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/tshirts', tshirtRoutes);
app.use('/api/tops', partyTopRoutes);
app.use('/api/trousers', trouserRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5001`);
});
