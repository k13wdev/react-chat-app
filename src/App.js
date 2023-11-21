import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Home from "./view/Home";
import Chat from "./view/Chat";
import Profile from "./view/Profile";
import { fetchUser } from './feature/users/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  },[])


  return (
    <Router>
      <div className="container mx-auto max-w-sm h-full">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;