import {
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import ChatList from "./components/chat-list/chat-list";
import Sidebar from "./components/sile-bar/sidebar";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-clients";
import Guard from "./components/auth/Guard";
import usePath from "./hooks/usePath";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const { path } = usePath();

  const showChatList = path === "/" || path.includes("chats");

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Guard>
          <Container maxWidth={false} disableGutters>
            {showChatList ? (
              <Grid container>
                <Grid item xs={0} md={0.5} lg={0.5} xl={0.5}>
                  <Sidebar />
                </Grid>
                <Grid item xs={12} md={3} lg={3} xl={3}>
                  <ChatList />
                </Grid>
                <Grid item xs={12} md={7.5} lg={7.5} xl={8.5}>
                  <Routes />
                </Grid>
              </Grid>
            ) : (
              <Routes />
            )}
          </Container>
        </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default App;
