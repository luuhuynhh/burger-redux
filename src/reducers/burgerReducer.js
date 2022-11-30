import { HANDLE_BEEF, HANDLE_CHEESE, HANDLE_SALAD } from "../types/burgerTypes";

const defaultValue = {
    burger: {
        salad: 2,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    }
};

export const burgerState = (state = defaultValue, action) => {
    switch (action.type) {
        case HANDLE_SALAD: {
            let salad = state.burger.salad;
            salad += action.payload;
            return { ...state, burger: { ...state.burger, salad } };
        }
        case HANDLE_CHEESE: {
            let cheese = state.burger.cheese;
            cheese += action.payload;
            return { ...state, burger: { ...state.burger, cheese } };
        }
        case HANDLE_BEEF: {
            let beef = state.burger.beef;
            beef += action.payload;
            return { ...state, burger: { ...state.burger, beef } };
        }
        default: return state;
    }
}