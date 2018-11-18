const API_URL = 'https://9xetmg653b.execute-api.eu-west-1.amazonaws.com/dev/books';
const API_KEY = 'SWknouDdE74R7J3XXS5yy2bFIpMIWbwY6ize2DsH';
const AUTHORIZATION = 'd8b9dc4e-031f-4ac6-8a7d-fe966f60ed7f';

const MOCK_API = true;

let isFetching = true;

export const getBooks = () => apiCall('books/');


export const apiCall = (endpoint) => {
    const fullUrl = `${API_URL}/${endpoint}`;

    if (isFetching) {
        return new Promise(resolve => resolve);
    }

    isFetching = true;

    if (MOCK_API) {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ title: "Test JSON added from JSONBIN's web interface, from Dashboard"}), 1500);
        });
    } else {
        return fetch(fullUrl, {
            headers: new Headers({ "x-api-key": API_KEY, "x-authorization": AUTHORIZATION}),
            method: 'GET'
        }).then((resp) => {
            return resp.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`ERROR`, err);
        }).finally(() => {
            isFetching = false;
        });
    }
}
