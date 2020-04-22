//what this file does is: check if a token is passed in. if yes, set it to the global header. otherwise delete it from global header
import axios from 'axios'

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken