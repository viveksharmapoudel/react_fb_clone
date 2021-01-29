import Header from  './Header'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import './App.css';
import { useStateValue } from './StateProvider';
function App() {
  const [{user}, dispatch]= useStateValue();

  return (

    <div className="app">
      {!user ?(
        <Login />
      )
        :(
        <div>
          <Header/>
          <div className="app__body">
            <Sidebar /> 
            <Feed />
            <Widgets />
    
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
