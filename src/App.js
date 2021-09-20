import PropsAndState from "./PropsAndState";
import Lists from "./Lists";
import DataFetch from "./DataFetch";
import DataFetchCustomHook from "./DataFetchCustomHook";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import DemoCreate from "./DemoCreate";
import Home from "./Home";
import ListDetails from "./ListDetails";
import NotFound from "./NotFound";
import Other from "./Other";


function App() {
  return (
    <div className="component app-component">
      <Router>
        <h2>App component</h2>
        <Navbar title = 'NavBar'/>
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home title = 'Home' /> 
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/other">
              <Other componenttName = 'Other' />
            </Route>
            <Route path="/demo-create">
              <DemoCreate componenttName = 'DemoCreate' />
            </Route>
            <Route path="/props-and-state">
              <PropsAndState title = 'PropsAndState' />
            </Route> 
            <Route path="/lists">
              <Lists title = 'Lists' />
            </Route> 
            <Route path="/data-fetch">
              <DataFetch title = 'DataFetch' />
            </Route> 
            <Route path="/data-fetch-custom-hook">
              <DataFetchCustomHook title = 'DataFetchCustomHook' />
            </Route>
            <Route path="/list-details/:id">
              <ListDetails title = 'ListDetails' />
            </Route> 
            <Route path="*">
              <NotFound title = 'NotFound' />
            </Route> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
