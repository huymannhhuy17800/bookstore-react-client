import NavigationBar from "./components/NavBar";
import { AboutPage, HomePage, ContactPage } from "./routes/index.js";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
