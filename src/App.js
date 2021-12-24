import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Chat /> : <SignIn />}</div>;
}

export default App;
