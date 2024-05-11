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
import { useLocation, useParams } from "react-router-dom";
import { useGetChat } from "../../hooks/useGetChat";
import { useEffect, useRef, useState } from "react";
import { useCreateMessage } from "../../hooks/useCreateMessage";
import { useGetMessages } from "../../hooks/useGetMessages";
import { PAGE_SIZE } from "../../constants/page-size";
import { Message } from "../../gql/graphql";
import { useCountMessages } from "../../hooks/useCountMessages";
import InfiniteScroll from "react-infinite-scroller";
import { useGetMe } from "../../hooks/useGetMe";

const ChatBox = () => {
  const param = useParams();
  const [message, setMessage] = useState("");
  const chatId = param._id!;
  const { data } = useGetChat({ _id: chatId });
  const [createMessage] = useCreateMessage();
  const { data: existingMessage, fetchMore } = useGetMessages({
    chatId,
    skip: 0,
    limit: PAGE_SIZE,
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const { messagesCount, countMessages } = useCountMessages(chatId);
  const { data: user } = useGetMe();

  useEffect(() => {
    countMessages();
  }, [countMessages]);

  const scrollToBottom = () => divRef.current?.scrollIntoView();

  useEffect(() => {
    if (existingMessage) {
      setMessages(existingMessage.messages);
    }
  }, [existingMessage]);

  useEffect(() => {
    if (existingMessage?.messages && existingMessage.messages.length <= 20) {
      setMessage("");
      scrollToBottom();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      console.log("scroll to top");
    }
  }, [location.pathname, existingMessage]);

  const handleCreateMessage = async () => {
    await createMessage({
      variables: {
        createMessageInput: {
          chatId,
          content: message,
        },
      },
    });
    setMessage("");
    scrollToBottom();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <Stack sx={{ height: "100%", justifyContent: "space-between" }}>
      <ChatBoxHeader name={data?.chat.name} />
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          maxHeight: "70vh",
          width: "100%",
        }}
      >
        <InfiniteScroll
          pageStart={0}
          isReverse={true}
          loadMore={() =>
            fetchMore({ variables: { skip: existingMessage?.messages.length } })
          }
          hasMore={
            existingMessage && messagesCount
              ? existingMessage.messages.length < messagesCount
              : false
          }
          useWindow={false}
        >
          {[...messages]
            .sort(
              (messageA, messageB) =>
                new Date(messageA.createAt).getTime() -
                new Date(messageB.createAt).getTime()
            )
            .map((message) => (
              <>
                {user?.me._id === message.user._id ? (
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
                            {message.content}
                          </Typography>
                        </Paper>
                        <Typography
                          variant="caption"
                          sx={{ marginLeft: "0.25rem" }}
                        >
                          {new Date(message.createAt).toLocaleTimeString()} -{" "}
                          {new Date(message.createAt).toLocaleDateString()}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      lg={1}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Avatar sx={{ width: "45px", height: "45px" }} src={message.user.imageUrl}/>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container alignContent="center" marginBottom="1rem">
                    <Grid
                      item
                      xs={1}
                      lg={1}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Avatar sx={{ width: "45px", height: "45px" }} src={message.user.imageUrl}/>
                    </Grid>
                    <Grid item xs={11} lg={11}>
                      <Stack sx={{ display: "flex" }}>
                        <Paper sx={{ width: "fit-content", maxWidth: "80%" }}>
                          <Typography sx={{ padding: "0.9rem" }}>
                            {message.content}
                          </Typography>
                        </Paper>
                        <Typography
                          variant="caption"
                          sx={{ marginLeft: "0.25rem" }}
                        >
                          {new Date(message.createAt).toLocaleTimeString()} -{" "}
                          {new Date(message.createAt).toLocaleDateString()}
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                )}
              </>
            ))}
        </InfiniteScroll>
        <div ref={divRef}></div>
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
          marginLeft: "10px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, width: "100%" }}
          placeholder="Type your message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={message}
          onKeyDown={async (event) => {
            if (event.key === "Enter") {
              await handleCreateMessage();
            }
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          onClick={handleCreateMessage}
        >
          <SendICon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default ChatBox;
