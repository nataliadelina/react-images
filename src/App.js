import { HashRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import './styles/App.css';


function App() {
  // disable mouse right click context menu
  // const click = (e) => {
  //   if (e.button === 2) {
  //     return false;
  //   }
  // };
  // document.body.onmousedown = click;
  // document.body.oncontextmenu = click;

  return (
    <HashRouter>
      <div className="app">
        <Header />
        <AllRoutes />
      </div>
    </HashRouter>
  );
}

export default App;