import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  return(
    <div class="main">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/emotions">Emotions </Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>My Website</h1>
      <p>This is a site made by Tabitha Miles using React and Netify!</p>
    </div>
  );
}

export function About() {
  return(
    <div class="main">
        <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/emotions">Emotions </Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return(
    <div class="main">
        <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/emotions">Emotions </Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>Contact</h1>
    </div>
  );
}

export function Emotions() {
  const [emotion, setEmotion] = useState("unkown");
  useEffect(() => {
    console.log(`We are all ${emotion} here!`);
  }, [emotion]);
  return (
    <div class="main">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/emotions">Emotions </Link>
        <Link to="/form">Form</Link>
      </nav>

      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}> Sad </button>
      <button onClick={() => setEmotion("excited")}> Excited </button>
      <button onClick={() => setEmotion("happy")}> Happy </button>
      <button onClick={() => setEmotion("tired")}> Tired </button>
    </div>
  );
}

function useInput(intialValue){
  const [value, setValue] = useState(intialValue);
  return[
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(intialValue)
  ];
}

export function Form() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <div class="main">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/emotions">Emotions </Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>This is a form.</h1>
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>Submit</button>
    </form>
    </div>
  );
}

export function App() {
  return (
    <Home />
  );
}

export default App;
