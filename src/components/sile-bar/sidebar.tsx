import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import router from "../Routes";
import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { snackVar } from "../../constants/snack";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../../constants/errors";
import { onLogout } from "../../utils/logout";

const Sidebar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { logout } = useLogout();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Stack sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              sx={{ width: "100%", height: "70px", borderRadius: 0 }}
              onClick={handleOpenUserMenu}
            >
              <SettingsIcon sx={{ width: "35px", height: "35px" }} />
            </IconButton>
            <Menu
              sx={{ml: "40px"}}
              id="user-menu"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                key={"logout"}
                onClick={async () => {
                  try {
                    await logout();
                    onLogout();
                    handleCloseUserMenu();
                  } catch (error) {
                    snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
                  }
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Sidebar;
