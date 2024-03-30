import { Route, Switch } from 'wouter';

import { Home } from './pages/Home';

import './App.css';

function App() { 
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} />
        <Route>404</Route>
      </Switch>
      <button className='app__button'>
        Click me!
      </button>
    </div>
  );
}

export default App;
