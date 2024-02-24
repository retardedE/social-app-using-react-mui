import React from "react";
import { Box, Stack, createTheme } from "@mui/material";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feeds from "./Components/Feeds";
import Rightbar from "./Components/Rightbar";
import AddPost from "./Components/AddPost";
import { ThemeProvider } from "@emotion/react";
function App() {  
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "text.primary",
          backgroundColor: "background.default",
        }}
      >
        <Navbar />
        <Stack direction={"row"}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feeds />
          <Rightbar />
        </Stack>
        <AddPost mode={mode} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
