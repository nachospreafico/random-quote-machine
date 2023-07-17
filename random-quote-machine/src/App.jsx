import "./App.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [quoteObject, setQuoteObject] = useState("");
  const [color, setColor] = useState("");

  const randomCategory = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];

  const cssColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "silver",
    "gold",
    "cyan",
    "magenta",
    "teal",
    "olive",
    "lime",
    "navy",
  ];

  useEffect(() => {
    fetchQuote("age");
    getRandomColor(cssColors);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  function getRandomCategory(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function getRandomColor(arr) {
    let index = Math.floor(Math.random() * arr.length);
    setColor(arr[index]);
  }

  function fetchQuote(category) {
    const apiKey = "Io3MUOJ7f4Lkza71n23Tpw==mMtXqbiJOsLSX7Ff";
    const headers = {
      "X-Api-Key": apiKey,
    };

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setQuoteObject(data[0]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <main className="quote-box" id="quote-box">
      <p id="text" className="quote" style={{ color: color }}>
        <FontAwesomeIcon icon={faQuoteLeft} /> {quoteObject.quote}
      </p>
      <p id="author" className="author" style={{ color: color }}>
        - {quoteObject.author}
      </p>
      <div className="links-container">
        <div className="links">
          <a
            className="tweet-quote"
            href="twitter.com/intent/tweet"
            id="tweet-quote"
          >
            <FontAwesomeIcon icon={faSquareTwitter} size="3x" color={color} />
          </a>
          <a className="tweet-quote" href="www.tumblr.com" id="tumblr-quote">
            <FontAwesomeIcon icon={faSquareTumblr} size="3x" color={color} />
          </a>
        </div>
        <button
          id="new-quote"
          onClick={() => {
            fetchQuote(getRandomCategory(randomCategory));
            getRandomColor(cssColors);
          }}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </main>
  );
}

export default App;
