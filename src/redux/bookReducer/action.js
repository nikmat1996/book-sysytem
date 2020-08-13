import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./actionTypes.js";

export const addBook = payload => ({
    type: ADD_BOOK,
    payload
})

export const editBook = payload => ({
    type: EDIT_BOOK,
    payload
})

export const deleteBook = payload => ({
    type: DELETE_BOOK,
    payload
})