import BookList from './components/book/BookList';
import { Switch, Route, Link } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <Switch>
      <Route exact path="/">
        <main className="container">
          <h1>Library Catalog</h1>
        </main>
      </Route>

      <Route path="/books/:id">
        <BookDetail />
      </Route>

      <Route path="/books">
        <BookList />
      </Route>
    </Switch>
  );
}

export default App;
