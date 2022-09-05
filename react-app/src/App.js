import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login";
// import SignUpPage from "./pages/SignUp";
import Blog from "./components/Blog";
import {MainPage} from "./pages/Main";
import Addblog from './pages/AddBlog'

function App() {
  return (
    <Router>
      <Routes>        
      <Route path = "/login" element={<LoginPage/>}/>
      <Route path="*" element={<LoginPage/>}/>
      <Route path = "/main" element={<MainPage/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/addblog" element={<Addblog/>}/>
      </Routes>
    </Router>
  );
}

export default App;


