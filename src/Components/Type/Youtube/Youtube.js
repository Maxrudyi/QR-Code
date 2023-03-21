import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.scss";

const YouTube = ({ setQrText }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQrText("youtube://" + text);
    setText("");
  }

  return (
    <div className="youtube">
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Video ID"
          variant="standard"
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        />
        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default YouTube;
