const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
const cart = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_PIZZA_CART":
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }

            }
            const totalCount = Object.keys(newItems).reduce(
                (sum,key) => newItems[key].items.length + sum, 0,
            );
            const totalPrice = Object.keys(newItems).reduce(
                (sum,key) => newItems[key].totalPrice + sum, 0,
            );

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        case "CLEAR_CART":
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            };
        case "REMOVE_CART_ITEM":
            const newItem = {
                ...state.items
            }
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].items.length
            delete newItem[action.payload]
            return {
                ...state,
                items:newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            };
        case "PLUS_CART_ITEM": {
            const newItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const newObj = {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            }
            const totalCount = Object.keys(newObj).reduce(
                (sum,key) => newObj[key].items.length + sum, 0,
            );
            const totalPrice = Object.keys(newObj).reduce(
                (sum,key) => newObj[key].totalPrice + sum, 0,
            );
            return {
                ...state,
                items: newObj,
                totalCount,
                totalPrice
            }
        }
        case "MINUS_CART_ITEM": {
            const oldItems = state.items[action.payload].items;
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            const newObj = {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            }
            const totalCount = Object.keys(newObj).reduce(
                (sum,key) => newObj[key].items.length + sum, 0,
            );
            const totalPrice = Object.keys(newObj).reduce(
                (sum,key) => newObj[key].totalPrice + sum, 0,
            );

            return {
                ...state,
                items: newObj,
                totalCount,
                totalPrice
            }
        }
      

        default:
            return state
    }

}

export default cart