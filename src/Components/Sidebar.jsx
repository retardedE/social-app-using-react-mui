import { AutoStories, Home, Group, Storefront, Person, Settings, AccountBoxRounded, ModeNight } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

export default function Sidebar({mode, setMode}) {
  const handleTheme=()=>{
    if(mode==='dark'){
      setMode('light')
    }else{
      setMode('dark')
    }
  }
  return (
    <Box sx={{display:{sm:'block', xs:'none'}}} flex={1}>
    <Box position={"fixed"} >
      <List sx={{ m: 0, p: 0 }} >
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#homepage">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Homepage</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#pages">
            <ListItemIcon>
              <AutoStories />
            </ListItemIcon>
            <ListItemText>Pages</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText>Groups</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton
            sx={{ width: "100%" }}
            component="a"
            href="#marketplace"
          >
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText>Market place</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton
            sx={{ width: "100%" }}
            component="a"
            href="#marketplace"
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#profile">
            <ListItemIcon>
              <AccountBoxRounded />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ m: 0, p: 0 }}>
          <ListItemButton sx={{ width: "100%" }} component="a" href="#profile">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
              <Switch onChange={handleTheme} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>    
    </Box>
  );
}
