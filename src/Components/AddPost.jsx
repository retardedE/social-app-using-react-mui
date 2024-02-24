import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
export default function AddPost() {
  const [anchorEl,setAnchorEl]=useState(false)
  const handleClick=()=>{
    setAnchorEl(true)
  }
  const handleClose=()=>{
    setAnchorEl(false)
  }
  return (
    <Box
      sx={{
        position: "fixed",
        boxShadow: { xs: " 10px 10px 10px 10px #121212", sm: "0" },
        p: { xs: "10px", sm: "0px" },
        background: { xs: "white", sm: "none" },
        width: "100%",
        display: "flex",
        justifyContent: { xs: "center", sm: "start" },
        bottom: { xs: "0px", sm: "20px" },
        marginLeft: { xs: "0", sm: "20px" },
      }}
    >
      <Fab onClick={handleClick} color="primary">
        <Add />
      </Fab>
      <Dialog
        open={anchorEl}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>Post a tweet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            For example, try something like, “What are your favorite ways to
            unwind during stressful times?” or, “I’m looking at 4 possible
            designs for my new logo. Which one do you like best?”
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Type something ..."
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
