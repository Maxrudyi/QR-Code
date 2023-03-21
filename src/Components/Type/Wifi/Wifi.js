import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import "./App.scss";

const Wifi = ({ setQrText }) => {
  const [type, setType] = useState("profile");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setQrText(
      `WIFI:T:${type};S:${name};${
        type !== "nopassword" ? `P:${password};` : ""
      }H:${hidden};`
    );
    setName("");
    setPassword("");
  }
  return (
    <div className="wifi">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 1.5 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Authentication type
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "type",
              id: "uncontrolled-native",
            }}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={"wpa"}>WPA</option>
            <option value={"wep"}>WEP</option>
            <option value={"nopassword"}>No password</option>
          </NativeSelect>
        </FormControl>

        <TextField
          id="standard-basic"
          label="Network Name (SSID)"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          sx={{ mb: 1.5 }}
        />

        <TextField
          id="standard-basic"
          label="Password (Optional)"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          value={password}
        />

        <FormControlLabel
          value="hidden"
          control={<Checkbox sx={{ padding: 0, pr: 1 }} />}
          label={<Typography sx={{ padding: 0 }}>Hidden?</Typography>}
          labelPlacement="start"
          onChange={(e) => setHidden(e.target.checked)}
          sx={{ mt: 4, ml: 0, padding: 0, flexDirection: "row" }}
        />

        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default Wifi;
