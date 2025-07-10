import express from "express"
import "dotenv/config";
const app = express()


const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!",
  },
  {
    id: 2,
    title: "Parallel lines",
    content:
      "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  },
  {
    id: 3,
    title: "Elevator joke",
    content:
      "I would tell you an elevator joke, but it’s an uplifting experience.",
  },
  {
    id: 4,
    title: "Time traveler",
    content: "I once saw a time traveler… I think. It was a future occurrence.",
  },
  {
    id: 5,
    title: "Dad joke",
    content: "I only know 25 letters of the alphabet. I don’t know y.",
  },
];
  



app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})