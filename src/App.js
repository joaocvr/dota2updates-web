import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingIn from "./modules/views/signin";
import SingUp from "./modules/views/signup";
import withRoot from "./modules/withRoot";
import AppBar from "./modules/views/appbar";
import News from "./modules/views/news";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withRoot(App);
