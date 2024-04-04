import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  submitLabels: string;
  onSubmit: (credentail: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
  extraFields?: React.ReactNode[];
  error?: string;
}

const Auth = ({
  submitLabels,
  onSubmit,
  children,
  error,
  extraFields,
}: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Stack
      spacing={3}
      sx={{
        height: "80vh",
        maxWidth: 360,
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={!!error}
        helperText={error}
      />
      {extraFields}
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        error={!!error}
        helperText={error}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabels}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
