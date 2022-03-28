import axios from "axios";

const TUITS_API = "`https://software-engineering-node-dev4.herokuapp.com/api/tuits";
const USERS_API = "https://software-engineering-node-dev4.herokuapp.com/api/users";

const api = axios.create({
    withCredentials: true
});

export const findAllTuits = () =>
    api.get(TUITS_API)
        .then(response => response.data);

export const findTuitById = (tid) =>
    api.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const findTuitByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);

export const createTuit = (uid, tuit) =>
    api.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

export const updateTuit = (tid, tuit) =>
    api.post(`${TUITS_API}/${tid}`, tuit)
        .then(response => response.data);

export const deleteTuit = (tid) =>
    api.delete(`${TUITS_API}/delete/${tid}`)
        .then(response => response.data);

export const deleteTuitByContent = (tuit) =>
    api.get(`${TUITS_API}/${tuit}/delete`)
        .then(response => response.data);
