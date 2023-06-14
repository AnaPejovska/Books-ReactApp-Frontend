import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import booksRepository from "../repository/booksRepository";

const BooksList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        booksRepository.getAll()
            .then(response => {
                console.log('Printing response', response.data);
                setBooks(response.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }, []);

    return (
        <div className="container-sm mt-5 text-center">
            <div className="container">
                <h2>List of Books</h2>
                <div className="notes-list mt-4">
                    {
                        books && books.map(book => (
                            <div key={book.id} className="bg-light mt-3 pt-3 pb-3">
                                <h4>{book.title}</h4>
                                <Link to={`/books/${book.id}`}>
                                    <button>View book details</button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default BooksList;