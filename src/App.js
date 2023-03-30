import './/scss/app.scss';
import Home from './pages/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import BookItem from './pages/BookItem';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="book/:id" element={<BookItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
