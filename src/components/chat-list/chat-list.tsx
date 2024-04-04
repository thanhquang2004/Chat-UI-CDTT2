import { Stack } from "@mui/material";
import ChatListHeader from "./chat-list-header/chat-list-header";
import { Box } from "@mui/system";
import ChatListItem from "./chat-list-item/chat-list-item";
import { useState } from "react";
import ChatListAdd from "./chat-list-add/chat-list-add";

const ChatList = () => {
  const handleSearch = (query: string) => {
    // Handle the search query here
    console.log(query);
  };
  const [chatListAddVisible, setChatListAddVisible] = useState<boolean>(false);
  const [selectedChatId, setSelectedChatId] = useState("");

  return (
    <>
      <ChatListAdd
        open={chatListAddVisible}
        handleClose={() => setChatListAddVisible(false)}
      />
      <Stack spacing={1}>
        <ChatListHeader
          onSearch={handleSearch}
          handleAddChat={() => setChatListAddVisible(true)}
        />
        <Box sx={{
          width: "100%",
          height: "80vh",
          maxHeight: "80vh",
          overflowY: "auto",
        }}>
          <ChatListItem />
        </Box>
      </Stack>
    </>
  );
};

export default ChatList;
