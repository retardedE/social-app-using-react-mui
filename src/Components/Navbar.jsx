import { Explicit, Logout, Mail, Notifications, PersonAdd, Settings } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Tooltip, Divider, ListItemIcon } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

export default function Navbar() {
  const [anchorEl, setAnchorEl]=useState(false)
  const handleClick=()=>{
    setAnchorEl(true)
  }
  const handleClose=()=>{
    setAnchorEl(false)
  }
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "60ch",
        "&:focus": {
          width: "65ch",
        },
      },
    },
  }));
  return (
    <AppBar bgcolor={"lightgreen"} sx={{ width: "100%" }} position={"sticky"}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ display: { xs: "none", sm: "block" }, fontFamily: "Poppins" }}
          variant="h6"
        >
          Retarded E
        </Typography>
        <Explicit
          sx={{ display: { xs: "block", sm: "none" }, fontSize: "32px" }}
        />
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <input
          id="xsInput"
          placeholder="Search..."
          style={{
            backgroundColor: "white",
            width: "35%",
            height: "40px",
            color: "black",
            outline: "none",
            border: "none",
            borderRadius: "10px",
            paddingLeft: "10px",
          }}
        ></input>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "12px" }}
          id="iconsContainer"
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              paddingTop: "5px",
              display: "flex",
              gap: "5px",
            }}
          >
            <Badge
              sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
              color="error"
              badgeContent={5}
            >
              <Mail sx={{ display: { xs: "none", sm: "block" } }} />
            </Badge>
            <Badge
              sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
              color="error"
              badgeContent={3}
            >
              <Notifications sx={{ display: { xs: "none", sm: "block" } }} />
            </Badge>
          </Box>
          <Tooltip title="Account Settings">
            <Avatar
              onClick={handleClick}
              sx={{ height: "30px", width: "30px", cursor: "pointer" }}
              src="https://mui.com/static/images/avatar/1.jpg"
            ></Avatar>
          </Tooltip>
          <Typography
            onClick={handleClick}
            variant="body3"
            sx={{ fontFamily: "Poppins", display: { xs: "block", sm: "none" } }}
          >
            Emad Alizade
          </Typography>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 5.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" /> My
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
