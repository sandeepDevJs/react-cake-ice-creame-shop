import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from "react-redux"
import store from "./redux/store"
import IceCreameContainer from './components/iceCreameContainer';

function App() {
  return (
    <Provider store={store}>
      <div class="container">
        <div className="App">
          <CakeContainer/>
          <IceCreameContainer/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
