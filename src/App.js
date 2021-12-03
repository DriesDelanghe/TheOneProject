import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import React from "react";
import {BooksPage} from "./pages/Books";
import {CharactersPage} from "./pages/Characters";
import {MoviesPage} from "./pages/Movies";
import {MovieCastPage} from "./pages/MovieDetails";
import {MovieQuotesPages} from "./pages/MovieQuotesPage";

function App() {
  return (
    <Router>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path={"books"} element={<BooksPage/>}/>
            <Route path={"characters"} element={<CharactersPage/>}/>
            <Route path={"movies"} element={<MoviesPage/>}/>
            <Route path={"movies/:movieId/details"} element={<MovieCastPage/>} />
            <Route path={"movies/:movieId/quotes"} element={<MovieQuotesPages/>} />
        </Routes>
    </Router>
  );
}

export default App;
