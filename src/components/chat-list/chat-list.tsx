import { Stack } from "@mui/material";
import ChatListHeader from "./chat-list-header/chat-list-header";
import { Box } from "@mui/system";
import ChatListItem from "./chat-list-item/chat-list-item";
import { useEffect, useState } from "react";
import ChatListAdd from "./chat-list-add/chat-list-add";
import { useGetChats } from "../../hooks/useGetChats";
import { PAGE_SIZE } from "../../constants/page-size";
import { useMessageCreated } from "../../hooks/useMessageCreated";
import usePath from "../../hooks/usePath";
import { useCountChats } from "../../hooks/useCountChats";
import InfiniteScroll from "react-infinite-scroller";

const ChatList = () => {
  const handleSearch = (query: string) => {
    // Handle the search query here
    console.log(query);
  };
  const [chatListAddVisible, setChatListAddVisible] = useState<boolean>(false);
  const [selectedChatId, setSelectedChatId] = useState("");
  const { data, fetchMore } = useGetChats({ skip: 0, limit: PAGE_SIZE });
  const { path } = usePath();
  const { chatsCount, countChats } = useCountChats();

  useMessageCreated({ chatIds: data?.chats.map((chat) => chat._id) || [] });

  useEffect(() => {
    countChats();
  }, [countChats]);

  useEffect(() => {
    const pathSplit = path.split("chats/");
    if (pathSplit.length === 2) {
      setSelectedChatId(pathSplit[1]);
    }
  }, [path]);

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
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() =>
              fetchMore({ variables: { skip: data?.chats.length } })
            }
            hasMore={
              data?.chats && chatsCount ? data.chats.length < chatsCount : false
            }
            useWindow={false}
          >
            {data?.chats &&
              [...data.chats]
                .sort((chatA, chatB) => {
                  if (!chatA.latestMessage) {
                    return -1;
                  }
                  return (
                    new Date(chatA.latestMessage?.createAt).getTime() -
                    new Date(chatB.latestMessage?.createAt).getTime()
                  );
                })
                .map((chat) => (
                  <ChatListItem
                    chat={chat}
                    selected={selectedChatId === chat._id}
                  />
                ))
                .reverse()}
          </InfiniteScroll>
        </Box>
      </Stack>
    </>
  );
};

export default ChatList;
