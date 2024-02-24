import { Box, Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

export default function Feeds() {
  return (
    <Stack sx={{display:'block'}} spacing={3} flex={5}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Stack>
  );
}
