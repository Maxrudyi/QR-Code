import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './App.scss'


const Instagram = ( {setQrText} ) => {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQrText('https://instagram.com/' + text);
    setText("");
  }
  return (
    <div className="instagram">
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Enter username"
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

export default Instagram;
