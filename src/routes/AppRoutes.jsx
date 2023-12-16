import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home/Home';
import {paths} from './paths';
import About from '../pages/About/About';
import Books from '../pages/Books/Books';
import Book from '../pages/Books/Book';
import CreateBook from '../pages/Books/CreateBook';
import EditBook from '../pages/Books/EditBook';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={paths.index} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.books} element={<Books />} />
        <Route path={`${paths.books}/:id`} element={<Book />} />
        <Route path={paths.createBook} element={<CreateBook />} />
        <Route path={`${paths.editBook}/:id`} element={<EditBook />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes