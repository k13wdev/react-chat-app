import { useContext } from "react";
import { SocketContext } from "./app/context";
import Chat from "./view/Chat";
import Profile from "./view/Profile";

const App = () => {
  const socket = useContext(SocketContext);

  return (
    <div className="container mx-auto max-w-sm h-full">
      <Chat />
      {/* <Profile/> */}
    </div>
  );
}

export default App;