import { createBrowserRouter } from "react-router-dom";
import Home from "./home/home";
import ChatBox from "./chat-box/chat-box";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <ChatBox />,
  },
]);

export default router;
