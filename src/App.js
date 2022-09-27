import BookList from './components/book/BookList';
import { Switch, Route, Link } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <Switch>
      <Route path="/books/:id">
        <BookDetail />
      </Route>

      <Route path="/books">
        <BookList />
      </Route>
      <Route exact path="/">
        <main className="container">
          <h1>Library Catalog</h1>
          <Link to="/books">Go to Books</Link>
        </main>
      </Route>
    </Switch>
  );
}

export default App;
