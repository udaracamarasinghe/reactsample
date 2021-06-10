import Navibar from './Navibar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './OrderForm';
import OrderDetails from './OrderDetails';
import NotFound from './NotFound';
import BreadcrumbBar from './BreadcrumbBar';
import CreateNUpdate from './CreateNUpdate';


function App() {

  return (
    <Router>
      <div className="App">
        <Navibar />        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateNUpdate />
            </Route>
            <Route path="/Edit/:id">
              <CreateNUpdate />
            </Route>
            <Route path="/order/:id">
              <OrderDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
