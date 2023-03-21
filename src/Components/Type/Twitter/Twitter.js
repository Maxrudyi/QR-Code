import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "./App.scss";

const Twitter = ({ setQrText }) => {
  const [type, setType] = useState("profile");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQrText(
      "https://twitter.com/" +
        (type === "profile" ? text : "intent/tweet?text=" + text)
    );
    setText("");
  }

  return (
    <div className="twitter">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 1.5 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Type
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "type",
              id: "uncontrolled-native",
            }}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={"profile"}>Profile</option>
            <option value={"tweet"}>Tweet</option>
          </NativeSelect>
        </FormControl>

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

export default Twitter;
