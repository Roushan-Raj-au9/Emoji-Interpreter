import "./App.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😟": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance"
}

let emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("")

  const handleInput = (event) => {
    let userInput = event.target.value
    if(userInput in emojiDictionary){
      setEmojiMeaning(emojiDictionary[userInput])
    }
    else{
      setEmojiMeaning("failure to recognise this emoji")
    }
  
  }

  const handleEmojiClick = (emoji) => {
    setEmojiMeaning(emojiDictionary[emoji])
  }

  return (
    <div className="App">
      <h1>Emoji Meaning Finder</h1>

      <input onChange={handleInput} />
      <h3>Emojis we know</h3>
      {
        emojisWeKnow.map((item, i) => <span onClick={() => handleEmojiClick(item)} style={{ fontSize: '2rem', padding: '0.5rem', cursor: 'pointer' }} key={i}>{item}</span>)
      }
      <p>{emojiMeaning}</p>
    </div>
  );
}
