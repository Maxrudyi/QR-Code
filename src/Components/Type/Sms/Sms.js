import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.scss";

const defaultInputValues = {
  phoneNumber: "",
  message: "",
};

const Sms = ({ setQrText }) => {
  const [values, setValues] = useState(defaultInputValues);
  const [result, setResult] = useState("");

  const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
  const validationSchema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => {
    setResult(data);
  };

  const handleChange = (value) => {
    setValues(value);
  };

  useEffect(() => {
    if (result) {
      setQrText(`smsto:${result.phoneNumber}:${result.message}`);
      setValues(defaultInputValues);
    }
  }, [result]);

  return (
    <div className="sms">
      <form onSubmit={handleSubmit(addUser)}>
        <TextField
          id="standard-basic"
          name="phoneNumber"
          label="Phone Number "
          variant="standard"
          type="tel"
          value={values.phoneNumber}
          required
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
          onChange={(event) =>
            handleChange({ ...values, phoneNumber: event.target.value })
          }
          helperText={
            errors.phoneNumber ? "Write number in format (+XX-XXXX-XXXX)" : ""
          }
          sx={{ mb: 1.5 }}
        />
        <TextField
          id="standard-basic"
          label="Message"
          name="message"
          variant="standard"
          type="text"
          multiline
          maxRows={10}
          inputProps={{ maxLength: 160 }}
          value={values.message}
          required
          {...register("message")}
          onChange={(event) =>
            handleChange({ ...values, message: event.target.value })
          }
        />

        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default Sms;
