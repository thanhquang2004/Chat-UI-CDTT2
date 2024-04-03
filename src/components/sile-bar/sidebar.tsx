import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { Container, Stack } from "@mui/system";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";

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
          }}
        >
          <IconButton sx={{mt: "20px"}}>
            <Avatar sx={{ width: "50px", height: "50px" }}/>
          </IconButton>
          <Stack sx={{height: "80%"}}>
            <IconButton size="large" sx={{width: '60px', height:"60px", borderRadius: 0}}>
              <ForumIcon sx={{ width: "35px", height: "35px" }} />
            </IconButton>
          </Stack>
          <IconButton sx={{mb: "20px"}}>
            <SettingsIcon sx={{ width: "35px", height: "35px" }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Sidebar;