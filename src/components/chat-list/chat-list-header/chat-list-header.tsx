import React from "react";

import {
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface ChatListHeaderProps {
  handleAddChat: () => void;
  onSearch: (query: string) => void;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha("#92929D", 0.15),
  "&:hover": {
    backgroundColor: alpha("#92929D", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "360px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const ChatListHeader: React.FC<ChatListHeaderProps> = ({ handleAddChat, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <Grid position="static" sx={{ borderRadius: "5px" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          my: "10px",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="600" marginLeft="5%">
            Message
          </Typography>
          <IconButton size="large" edge="start" onClick={handleAddChat}>
            <AddCircleOutlineOutlinedIcon
              sx={{ width: "35px", height: "35px" }}
            />
          </IconButton>
        </Grid>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search conversation"
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearch}
          />
        </Search>
      </Toolbar>
    </Grid>
  );
};

export default ChatListHeader;
