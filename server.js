const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/agile-metrics', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Agile Metrics Dashboard API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});