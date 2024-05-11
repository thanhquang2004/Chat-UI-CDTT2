import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { Container, Stack } from "@mui/system";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import router from "../Routes";

const Sidebar = () => {
  return (
    <AppBar position="static" sx={{ height: "100vh" }}>
      <Container sx={{ bgcolor: "#47B7EC", height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <IconButton
            sx={{ mt: "20px" }}
            onClick={() => router.navigate("/profile")}
          >
            <Avatar sx={{ width: "50px", height: "50px" }} />
          </IconButton>
          <Stack sx={{ height: "70%" }}>
            <IconButton
              size="large"
              sx={{ width: "100%", height: "70px", borderRadius: 0 }}
            >
              <ForumIcon sx={{ width: "35px", height: "35px" }} />
            </IconButton>
          </Stack>
          <Stack>
            <IconButton
              size="large"
              sx={{ width: "100%", height: "70px", borderRadius: 0 }}
            >
              <SettingsIcon sx={{ width: "35px", height: "35px" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Sidebar;
