const initialState = {
    pageTitle: 'QTemuan',
    copyRight: 'Copyright 2K18',
}
const appReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_MEMBERS':
            return {
                ...state,
                pageTitle: action.payload.newPageTitle,
            }
        default:
            return state
    }
}

export default appReducer