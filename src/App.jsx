import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import User from "./pages/User"; // pages papkasidan olindi
import Todos from "./pages/Todos"; // pages papkasidan olindi

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;