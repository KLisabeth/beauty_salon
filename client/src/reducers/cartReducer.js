import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_APPOINTMENT_TIME} from "../constants/cartConstants";

function cartReducer(state={cartItems:[], appointmentTime:{}}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x =>x.product === item.product)
            if(product){
              return  {
                  cartItems: 
                  state.cartItems.map(x => x.product === product.product? item: x)
                };
            }
            return{cartItems: [...state.cartItems, item]};
            case CART_REMOVE_ITEM:
                return{cartItems: state.cartItems.filter(x=>x.product !== action.payload)}
                case CART_EMPTY:
                    return {
                      ...state,
                      error: '',
                      cartItems: [],
                    };
            case CART_SAVE_APPOINTMENT_TIME:
                        return{ ...state, appointmentTime: action.payload };;
            default:
                return state;
    }
}
export {cartReducer};