const axios = require('axios');
const url = "https://api.github.com/search/repositories"

export const getRepositoryData =  (query) => {
    return   axios.get(url , { params : { q : query}}).then(res => {
        
        return res.data;}).catch(err => err);

}
