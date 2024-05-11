import {
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useCreateChat } from "../../../hooks/useCreateChat";
import router from "../../Routes";
import { UNKNOWN_ERROR_MESSAGE } from "../../../constants/errors";

interface ChatListAddProps {
  open: boolean;
  handleClose: () => void;
}

const ChatListAdd = ({ open, handleClose }: ChatListAddProps) => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [createChat] = useCreateChat();
  const [search, setSearch] = useState("");


  const onClose = () => {
    setError("");
    setName("");
    setIsPrivate(true);
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add chat
          </Typography>
          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={
                <Switch
                  defaultChecked
                  value={isPrivate}
                  onChange={(event) => setIsPrivate(event.target.checked)}
                />
              }
              label="Private"
            />
          </FormGroup>
          {isPrivate ? (
            <div>
              <Paper
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Users"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <IconButton sx={{ p: "10px" }} onClick={() => {}}>
                  <SearchIcon />
                </IconButton>
              </Paper>
              
            </div>
          ) : (
            <TextField
              label="Name"
              error={!!error}
              helperText={error}
              onChange={(event) => setName(event.target.value)}
            />
          )}
          <Button
            variant="contained"
            onClick={async () => {
              if (isPrivate) {
              } else {
                if (!name.length) {
                  setError("Name is required");
                  return;
                }
                console.log(name);
                onClose();
                try {
                  const chat = await createChat({
                    variables: {
                      createChatInput: {
                        name,
                        isPrivate,
                        member: [],
                      },
                    },
                  });
                  onClose();
                  router.navigate(`/chats/${chat.data?.createChat._id}`);
                } catch (error) {
                  setError(UNKNOWN_ERROR_MESSAGE);
                  console.log(error);
                }
              }
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ChatListAdd;
