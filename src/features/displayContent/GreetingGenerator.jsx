import React from "react";
import styles from "./Banner.module.css";

export default function GreetingGenerator({
  greetings = ["Welcome", "Bienvenue", "Herzlich willkommen", "Bienvenidos"],
  phrases = [
    "It is not enough to have a good mind, the main thing is to use it well. - René Descartes",
    "Have fun with empowerment. It seems to make everyone that gets it really happy. - Rick Sanchez",
    "Trying is the first step to failure. - H. J. Simpson",
    "Don't put off until tomorrow what you can do today. - Benjamin Franklin",
  ],
}) {
  const greetingIndex = Math.floor(Math.random() * greetings.length);
  const phraseIndex = Math.floor(Math.random() * phrases.length);

  return (
    <div className={styles.greetingGenLayout}>
      <div className={styles.greetings}>
        <span>{greetings[greetingIndex]}</span>
      </div>

      <div className={styles.phrases}>
        <span>
          <em>{phrases[phraseIndex]}</em>
        </span>
      </div>
    </div>
  );
}
