const reducer = (state, action)=>{
   switch(action.type){
    case 'SET_FAVORITE':

        return {
            ...state,
            myList: [...state.myList, action.payload]
        }
    case 'DELETE_FAVORITE':
       
        return {
            ...state,
            myList: state.myList.filter((item) => item.id !== action.payload.ItemId),
          };
    case 'LOGIN_RESQUEST':
        return{
            ...state,
            user: action.payload

        }
    case 'LOGOUT_REQUEST':
        return{
            ...state,
            user: action.payload,
        }
    case 'REGISTER_REQUEST':
        return{
            ...state,
            user: action.payload
        }
    
    default:
        return state
   }
}

export default reducer