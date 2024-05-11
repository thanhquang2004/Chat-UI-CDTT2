import { createBrowserRouter } from "react-router-dom";
import Home from "./home/home";
import ChatBox from "./chat-box/chat-box";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Profile from "./profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chats/:_id",
    element: <ChatBox />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

export default router;
