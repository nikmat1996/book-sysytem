import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./actionTypes.js";

const initState = {
    allBooks: []
};

const reducer = (state = initState, {type, payload}) => {
    let Books = []
switch (type) {
    case ADD_BOOK:
    return {
        ...state,
        allBooks: [...state.allBooks, payload]
    };

    case EDIT_BOOK:
        Books = state.allBooks.map(book => book.key !== payload.key ? book : payload)
        return {
            ...state,
            allBooks: [...Books]
        };
    case DELETE_BOOK:
        return {
            ...state,
            allBooks: [state.allBooks.filter(book => book.key !== payload)]
        }
    
    default:
    return state;
}
};

export default reducer;