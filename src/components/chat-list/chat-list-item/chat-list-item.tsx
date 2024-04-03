import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "./chat-list-item.css";

interface ChatListItemProps {
  setSelectedChatId: (id: string) => void;
}

const ChatListItem = () => {
  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton
          sx={{
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="John Doe"
            secondary={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <Typography
                  sx={{ display: "inline" }}
                  alignSelf="center"
                  component={"span"}
                  variant="body2"
                  color="text.primary"
                >
                  John Doe
                </Typography>
                <Typography>
                  <div className="content">
                    {":  Hello, how are you doing?"}
                  </div>
                </Typography>
              </Box>
            }
          ></ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default ChatListItem;
