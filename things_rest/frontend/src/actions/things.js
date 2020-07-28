import axios from 'axios'

import { DELETE_THING, GET_THINGS, ADD_THING } from './types'

//GET THINGS
export const getThings = () => dispatch => {
    axios.get('/things/')
        .then(res => {
            dispatch({
                type: GET_THINGS,
                payload: res.data

            })
        }).catch(err => console.log("err G"));
}

//DELETE THING
export const deleteThing = (id) => dispatch => {
    axios.delete(`/things/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_THING,
                payload: id

            })
        }).catch(err => console.log("err D"));
}

//ADD THING
export const addThing = (thing) => dispatch => {
    axios.post('/things/', thing)
        .then(res => {
            dispatch({
                type: ADD_THING,
                payload: res.data

            })
        }).catch(err => console.log("err A"));
}