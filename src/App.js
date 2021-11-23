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
      <div className="content">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default withRoot(App);
