import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

// App.js

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        <p>That feels like an existential question, don't you think?</p>
        <p>That feels like an existential question, don't you think?</p>
        <p>That feels like an existential question, don't you think?</p>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}

export default App;
