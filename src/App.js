import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Note from './pages/Note';

function App() {
  return (
    <div className="rounded-lg shadow-sm col-md-5 col-8 mx-auto mt-5 px-3 py-4">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' component={Form} />
          <Route path='/note/:id' component={Note} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
