const initialState = {
   marketItems: null
}

const reducer = (state = initialState, action) => {
   console.log('actions', action)
    switch (action.type) {
       case 'SELECTED_MARKET_ITEM':
         return {...state, marketItems: action.payload}
       case 'RESET' : 
         return 0
      default: return state
    }
 }
 export default reducer;