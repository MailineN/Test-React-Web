import '../App.css';
import Banner from './Banner';
import DisplayList from "./DisplayList";
import Foot from "./Foot";
import Favorites from "./Favorites";

function App() {
  return (
      <div>
        <Banner/>
          <DisplayList/>
          <Favorites/>
          <Foot/>
      </div>

  );
}

export default App;
