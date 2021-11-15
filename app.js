import express from "express";
import { handleGreeting } from "./controllers/GreetingController";

const app = express();

app.use(express.static('public'));

// CRUD
app.get("/hello/:name", handleGreeting)

if (process.env.NODE_ENV === 'production') {
    app.listen(3000)
  }
  
export const viteNodeApp = app;
