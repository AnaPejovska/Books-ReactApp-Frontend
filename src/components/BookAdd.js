import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import BooksService from "../repository/booksRepository";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const BookAdd = () => {

    const[title,setTitle] = useState('');
    const[review,setReview] = useState('');
    const[grade,setGrade] = useState('');
    const {id} = useParams();
    const [errors,setErrors] = useState(false);
    const history = useNavigate();

    useEffect(()=>{
        if(id){ //if the id is present
            BooksService.get(id)
                .then(book => {
                    //update the state
                    setTitle(book.data.title);
                    setReview(book.data.review);
                    setGrade(book.data.grade);
                })
                .catch(error =>{
                    console.log("ID is not present", error)
                })
        }
    },[]);


    const saveBook = (event) => {
        event.preventDefault();

        if(!title || !review || !grade){
            setErrors(true);
            return;  //error message za ako ne vneseme nisto vo polinjata
        }

        const book = {id,title,review,grade}
        if(id){ //if id is present call the service update method
            BooksService.update(book)
                .then(response => {
                    history("/");
                })
                .catch(error=> {
                    console.log('something is wrong with the update in BookAdd', error);
                })
        }else{ //if id is not present call the service create method
            BooksService.create(book)
                .then(response=> {
                    console.log('Book added successfully', response.data);
                    history("/");
                })
                .catch(error=> {
                    console.log('something went wrong', error);
                })
        }

    }

    return (
        <div className="create">
            <form>
                <div className="text-center">
                    <h5>{id ? "Update a Book" : "Add a New Book"}</h5>
                    {errors && <span style={{color: 'red', fontStyle:'italic'}}>Please enter mandatory fields</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="title">Book Title: <sup>*</sup></label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={title}
                           onChange={(event => setTitle(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label htmlFor="review">Book Review: <sup>*</sup></label>
                    <textarea className="form-control"
                              id="review"
                              value={review}
                              onChange={(event => setReview(event.target.value))}/>
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Book Grade: <sup>*</sup></label>
                    <textarea className="form-control"
                              id="grade"
                              value={grade}
                              onChange={(event => setGrade(event.target.value))}/>
                </div>

                <div className="text-center">
                    <button onClick={(event => saveBook(event))}>Save Book</button>
                </div>
            </form>
        </div>
    );

}

export default BookAdd;