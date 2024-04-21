import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");
  const handleInput = (event) => {
    let value = event.target.value;
    //basic validation
    if (value.includes("<script>")) {
      setWarningText("No <script> tags allowed");
      value = value.replace("<script>", "");
    } else if (value.includes("@")) {
      setWarningText("No @ allowed");
      value = value.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(value);
  };
  return (
    <>
      <textarea
        value={text}
        onChange={handleInput}
        className="textarea"
        placeholder="Enter text here..."
        spellCheck="false"
      />
      <Warning message={warningText} />
    </>
  );
}
