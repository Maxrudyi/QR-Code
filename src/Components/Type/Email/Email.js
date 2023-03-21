import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.scss";

const defaultInputValues = {
  email: "",
  subject: "",
  message: "",
};

const Email = ({ setQrText }) => {
  const [values, setValues] = useState(defaultInputValues);
  const [result, setResult] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid."),
    subject: yup.string(),
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
      setQrText(
        `MATMSG:TO:${result.email};SUB:${result.subject};BODY:${result.message};;`
      );
      setValues(defaultInputValues);
    }
  }, [result]);

  return (
    <div className="email">
      <form onSubmit={handleSubmit(addUser)}>
        <TextField
          id="standard-basic"
          name="email"
          label="Email "
          variant="standard"
          type="text"
          value={values.email}
          required
          {...register("email")}
          error={errors.email ? true : false}
          onChange={(event) =>
            handleChange({ ...values, email: event.target.value })
          }
          helperText={errors.email ? "Email is required" : ""}
          sx={{ mb: 1.5 }}
        />
        <TextField
          id="standard-basic"
          label="Subject"
          name="subject"
          variant="standard"
          type="text"
          multiline
          maxRows={10}
          inputProps={{ maxLength: 228 }}
          value={values.subject}
          required
          {...register("subject")}
          onChange={(event) =>
            handleChange({ ...values, subject: event.target.value })
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
          inputProps={{ maxLength: 950 }}
          value={values.message}
          required
          {...register("message")}
          onChange={(event) =>
            handleChange({ ...values, message: event.target.value })
          }
          sx={{ mb: 1.5 }}
        />

        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default Email;
