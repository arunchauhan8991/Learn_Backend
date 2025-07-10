import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

useEffect(() => {
  axios.get("/api/jokes")
  .then((res) => {
    setJokes(res.data)   // axios converts response automatically to json format no neend to convert manually
  })
  .catch((error) => {
    console.log(error)
  })
}, [])

  return (
    <>
      <h1>Full stack development</h1>
      <p> JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
