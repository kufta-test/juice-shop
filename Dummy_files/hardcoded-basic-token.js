import axios from 'axios'

const token = "cGVyZm9ybWFuY2U6cGVyZm9ybWFuY2U="

axios.post('/api/token', JSON.stringify({
    key: 'aaaaaa'
})).then(res => {
    // ruleid: hardcoded-basic-token
    axios.defaults.headers.common['Authorization'] = "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    // ruleid: hardcoded-basic-token
    axios.defaults.headers.common['Authorization'] = "Basic "+token;


    // ok: hardcoded-basic-token
    axios.defaults.headers.common['Authorization'] = "Basic eexample";


    // ok: hardcoded-basic-token
    axios.defaults.headers.common['Authorization'] = "Basic" + config.value["token"]


}).catch((error) => {
    console.error(error)
});