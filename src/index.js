import express from 'express'
import indexRoutes from "./routes/payment.route.js"
import path from "path"

// Initializations
const app = express()

app.use(express.json())

// Routes
app.use(indexRoutes)

// Static files
app.use(express.static(path.resolve("src/public")));

// Start Server
app.listen(3000, () => {
    console.log('Server started on port 3000')
})