import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import React from "react";
import {BooksPage} from "./pages/Books";
import {CharactersPage} from "./pages/Characters";
import {MoviesPage} from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path={"books"} element={<BooksPage/>}/>
            <Route path={"characters"} element={<CharactersPage/>}/>
            <Route path={"movies"} element={<MoviesPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
