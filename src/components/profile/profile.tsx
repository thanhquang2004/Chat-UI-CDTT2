import { Avatar, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useGetMe } from "../../hooks/useGetMe";
import { API_URL } from "../../constants/urls";
import { snackVar } from "../../constants/snack";
import { UploadFile } from "@mui/icons-material";

const Profile = () => {
  const me = useGetMe();

  const handleFileUpload = async (event: any) => {
    try {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      const res = await fetch(`${API_URL}/users/image`, {
        method: "POST",
        body: formData,
      });
      console.log(formData);
      if(!res.ok) {
        throw new Error("Failed to upload image.")
      }
      snackVar({ message: "Image uploaded", type: "success"})
    } catch (error) {
      console.log(error);
      snackVar({ message: "Failed to upload image", type: "error"})
    }
  };

  return (
    <Stack>
      <Typography variant="h1">User Profile</Typography>
      <Avatar sx={{ width: 256, height: 256 }} src={me.data?.me.imageUrl}></Avatar>
      <Button
        component="label"
        variant="contained"
        size="large"
        startIcon={<UploadFile />}
      >
        Upload Image
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
    </Stack>
  );
};

export default Profile;
