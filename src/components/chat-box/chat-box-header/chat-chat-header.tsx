import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatBoxHeader = () => {
  return (
    <Box
      sx={{
        p: "25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#47B7EC",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ display: "flex", alignItems: "center", }}>
        <Avatar sx={{ width: "50px", height: "50px" }} />
        <Typography
          sx={{ fontSize: "28px", fontWeight: 600, paddingLeft: "10px" }}
        >
          Chat Box Header
        </Typography>
      </Grid>
      <Grid>
        <IconButton>
            <MoreVertIcon sx={{width: "50px", height: "50px"}}/>
        </IconButton>
      </Grid>
    </Box>
  );
};

export default ChatBoxHeader;
