import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import ChatList from "./components/chat-list/chat-list";
import Sidebar from "./components/sile-bar/sidebar";
import Snackbar from "./components/Snackbar.tsx/Snackbar";
import client from "./constants/apollo-clients";
import { ApolloProvider } from "@apollo/client";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters sx={{ overflow: "hidden" }}>
          <Grid container sx={{ overflow: "hidden" }}>
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
        </Container>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default App;
