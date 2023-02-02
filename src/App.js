import logo from "./logo.svg";
import styles from "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import NewPost from "./pages/NewPost/NewPost";
import EditPost from "./pages/Edit Post/EditPost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/:postId/edit" element={<EditPost />} />
      </Routes>
      <ToastContainer autoClose={700} closeOnClick hideProgressBar={true} />
      <Footer />
    </div>
  );
}

export default App;
