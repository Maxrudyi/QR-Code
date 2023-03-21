import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.scss";

const TextMessage = ({ setQrText }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQrText(text);
    setText("");
  }

  return (
    <div className="textMessage">
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Enter your text"
          variant="standard"
          multiline
          maxRows={10}
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          inputProps={{ maxLength: 1228 }}
        />
        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default TextMessage;
