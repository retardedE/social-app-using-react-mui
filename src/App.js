import logo from "./logo.svg";
import "./App.css";
import { Box, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feeds from "./Components/Feeds";
import Rightbar from "./Components/Rightbar";
import AddPost from "./Components/AddPost";

function App() {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Stack direction={"row"}>
        <Sidebar />
        <Feeds />
        <Rightbar />
      </Stack>
      <AddPost />
    </Stack>
  );
}

export default App;
