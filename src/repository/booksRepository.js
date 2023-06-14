import axios from '../custom-axios/axios';

const BooksService = {
    getAll: () => {
        return axios.get("/books");
    },

    get: (id) => {
        return axios.get(`/books/${id}`)
    },

    create: (data) => {
        return axios.post("/books",data);
    },

    remove: (id) => {
        return axios.delete(`/books/${id}`)
    },

    update: (data) => {
        return axios.put('/books', data);
    }
}

export default BooksService;