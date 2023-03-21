import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.scss";

const defaultInputValues = {
  url: "",
};

const Website = ({ setQrText }) => {
  const [values, setValues] = useState(defaultInputValues);
  const [result, setResult] = useState("");

  const validationSchema = yup.object().shape({
    url: yup
      .string()
      .matches(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        "Enter correct url!"
      )
      .required("Please enter website"),
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
      setQrText(result.url);
      setValues(defaultInputValues);
    }
  }, [result]);

  return (
    <div className="website">
      <form onSubmit={handleSubmit(addUser)}>
        <TextField
          id="standard-basic"
          name="url"
          label="Enter your website URL "
          variant="standard"
          type="text"
          value={values.url}
          required
          {...register("url")}
          error={errors.url ? true : false}
          onChange={(event) =>
            handleChange({ ...values, url: event.target.value })
          }
          helperText={errors.url ? "URL is required" : ""}
        />
        <Button type="submit" variant="contained">
          Generate QR Code
        </Button>
      </form>
    </div>
  );
};

export default Website;
