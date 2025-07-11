import express from "express"
import "dotenv/config";
import cors from "cors";
import connetDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"

connetDB()   //form db.js

const app = express()
app.use(cors()) //Enable Cross-Origin Resource Sharing

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

//API to listen clerk Webhooks
app.post("/api/clerk", express.raw({ type: "application/json" }), clerkWebhooks);

app.get('/', (req, res)=> res.send("API is working fine"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
