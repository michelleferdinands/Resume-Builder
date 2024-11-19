require('dotenv').config();  // Loads environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;  // Use the port from .env or default to 5000