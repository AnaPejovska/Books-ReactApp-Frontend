import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import BooksService from "../repository/booksRepository";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


const BookDetails = () => {

    const {id} = useParams();
    const[currentBook, setCurrentBook] = useState('');
    const history = useNavigate();

    useEffect(()=>{
        BooksService.get(id)
            .then(book => {
                setCurrentBook(book.data);
            })
            .catch(error => {
                console.log('something went wrong', error)
            })
    }, []);

    const handleDelete = () =>{
        BooksService.remove(id)
            .then(response => {
                history("/");
            })
            .catch(error =>{
                console.log("something is wrong in handleDelete NoteDetails", error);
            })
    }

    const handleEdit = () => {
        history(`/books/edit/${id}`);
    }

    return(
        <div className="note-details main-content">

            <div className="container-sm mt-5 text-center bg-light">
                <article>
                    <h5 className="text-capitalize text-success">{currentBook.title}</h5>
                    <div className="mb-3 font-italic metadata">
                        <span>My review: {currentBook.review}</span> <br/>
                        <span className="text-capitalize">My grade: {currentBook.grade}</span>
                    </div>
                </article>
                <button onClick={handleDelete} className="btn-danger">Delete</button>
                <button onClick={handleEdit} className="ml-3">Edit</button>
            </div>

        </div>
    )
}

export default BookDetails;