
import axios from 'axios';
const deploy = async (url) => {    
    return axios.get(url)       
};


export const API = deploy;