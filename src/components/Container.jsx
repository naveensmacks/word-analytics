import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    //calculate number of words, removing empty strings
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    faceBookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
