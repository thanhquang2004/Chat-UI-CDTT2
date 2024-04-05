import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SendICon from "@mui/icons-material/Send";
import ChatBoxHeader from "./chat-box-header/chat-box-header";

const ChatBox = () => {
  return (
    <Stack sx={{ height: "100%", justifyContent: "space-between" }}>
      <ChatBoxHeader />
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          maxHeight: "70vh",
          width: "100%",
        }}
      >
        <Grid container alignContent="center" marginBottom="1rem">
          <Grid
            item
            xs={1}
            lg={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar sx={{ width: "45px", height: "45px" }} />
          </Grid>
          <Grid item xs={11} lg={11}>
            <Stack sx={{ display: "flex" }}>
              <Paper sx={{ width: "fit-content", maxWidth: "80%" }}>
                <Typography sx={{ padding: "0.9rem" }}>
                  Helllllllllllllllllllllllllllllllooooooooooooooooooo
                </Typography>
              </Paper>
              <Typography variant="caption" sx={{ marginLeft: "0.25rem" }}>
                12:00 PM
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          marginBottom="1rem"
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Grid
            item
            xs={11}
            lg={11}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Stack>
              <Paper
                sx={{
                  display: "flex",
                  width: "fit-content",
                  backgroundColor: "#47B7EC",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ padding: "0.9rem" }}>
                  Helllllllllllllllllllllllllllllllooooooooooooooooooo
                </Typography>
              </Paper>
              <Typography variant="caption" sx={{ marginLeft: "0.25rem" }}>
                12:00 PM
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={1}
            lg={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar sx={{ width: "45px", height: "45px" }} />
          </Grid>
        </Grid>
      </Box>
      <Paper
        sx={{
          p: "6px 4px",
          display: "flex",
          alignItems: "center",
          width: "95%",
          borderRadius: "10px",
          margin: "0.5rem 0",
          backgroundColor: "#E0E0E0",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, width: "100%" }}
          placeholder="Type your message"
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }}>
          <SendICon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default ChatBox;
