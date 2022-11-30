import { HANDLE_BEEF, HANDLE_CHEESE, HANDLE_SALAD } from "../types/burgerTypes"

export const addSalad = () => {
    return {
        type: HANDLE_SALAD,
        payload: 1
    }
}

export const delSalad = () => {
    return {
        type: HANDLE_SALAD,
        payload: -1
    }
}

export const addCheese = () => {
    return {
        type: HANDLE_CHEESE,
        payload: 1
    }
}

export const delCheese = () => {
    return {
        type: HANDLE_CHEESE,
        payload: -1
    }
}

export const addBeef = () => {
    return {
        type: HANDLE_BEEF,
        payload: 1
    }
}

export const delBeef = () => {
    return {
        type: HANDLE_BEEF,
        payload: -1
    }
}