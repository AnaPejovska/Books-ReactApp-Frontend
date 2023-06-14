import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', //url vrz koe pravam povici
    headers: { //headeri koi ni se potrebni
        'Access-Control-Allow-Origin' : '*' //da gi dozvoluva site
    }
})

export default instance;