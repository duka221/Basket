import './App.css';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'
import Home from './home';
import Items from './items';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Items} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
