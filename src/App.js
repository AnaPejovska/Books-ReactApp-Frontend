import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useReducer} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router';
import Navbar from "./components/navbar";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import BookAdd from "./components/BookAdd";

function App() {
    return(
        <BrowserRouter>
            <div>
                <Navbar />
                <div>
                    <Routes>
                        <Route exact path="/" element={<BooksList/>} />
                        <Route path="/books/:id" element={<BookDetails/>}/>
                        <Route path="/books/edit/:id" element={<BookAdd />} />
                        <Route path="/add" element={<BookAdd/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
