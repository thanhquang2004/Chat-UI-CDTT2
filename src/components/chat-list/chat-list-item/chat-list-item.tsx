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
import { Chat } from "../../../gql/graphql";
import router from "../../Routes";

interface ChatListItemProps {
  chat: Chat;
  selected: boolean;
}

const ChatListItem = ({ chat, selected }: ChatListItemProps) => {
  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton
          onClick={() => {
            router.navigate(`/chats/${chat._id}`);
          }}
          selected={selected}
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
            primary={chat.name}
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
                  {chat.latestMessage?.user.username}
                </Typography>
                <Typography>
                  <div className="content">
                    {": " + (chat.latestMessage?.content || "")}
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
