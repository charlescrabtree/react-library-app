import BookList from './components/book/BookList';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <Switch>
      <Route exact path="/">
        <main className="container">
          <h1>Library Catalog</h1>
          <BookList />
        </main>
      </Route>
    </Switch>
  );
}

export default App;
