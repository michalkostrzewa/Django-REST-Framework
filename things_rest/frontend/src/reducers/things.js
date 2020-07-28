import { GET_THINGS, DELETE_THING, ADD_THING } from '../actions/types.js';

const initialState = {
    things: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_THINGS:
            return {
                ...state,
                things: action.payload,
            }
        case DELETE_THING:
            return {
                ...state,
                things: state.things.filter(thing => thing.id !== action.payload)
            }
        case ADD_THING:
            return {
                ...state,
                things: [...state.thing, action.payload]
            }
        default:
            return state;
    }
}