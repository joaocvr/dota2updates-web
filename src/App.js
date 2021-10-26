import AppBar from "./modules/views/appbar";
import withRoot from "./modules/withRoot";
import News from "./modules/views/news";

function App() {
  return (
    <div>
      <AppBar />
      <News />
    </div>
  );
}

export default withRoot(App);
