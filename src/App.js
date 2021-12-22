import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/Footer/Footer";
import Navbar from "./components/UI/Navbar/Navbar";
import CreateResume from "./pages/CreateResume";
import "./styles/App.css";

function App() {
  return (
    <>
    <Navbar/>
    <AppRouter/>
    <Footer/>
    </>
  );
}

export default App;
