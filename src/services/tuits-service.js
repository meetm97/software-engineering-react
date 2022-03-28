import axios from "axios";

const TUITS_API = "https://software-engineering-node-dev4.herokuapp.com/api/tuits";
const USERS_API = "https://software-engineering-node-dev4.herokuapp.com/api/users";

const api = axios.create({
    withCredentials: true
});

export const findAllTuits = () =>
    axios.get(TUITS_API)
        .then(response => response.data);

export const findTuitById = (tid) =>
    axios.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const findTuitByUser = (uid) =>
    axios.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);

export const createTuit = (uid, tuit) =>
    axios.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

export const updateTuit = (tid, tuit) =>
    axios.post(`${TUITS_API}/${tid}`, tuit)
        .then(response => response.data);

export const deleteTuit = (tid) =>
    axios.delete(`${TUITS_API}/delete/${tid}`)
        .then(response => response.data);

export const deleteTuitByContent = (tuit) =>
    axios.get(`${TUITS_API}/${tuit}/delete`)
        .then(response => response.data);
