const filterReducer = (term = '', action) => {
    switch (action.type) {
        case 'FILTER_TERM':
            return action.payload
        default:
            return term
    }
}

export const filterTerm = (term) => {
    return {
        type: 'FILTER_TERM',
        payload: term
    }
}

export default filterReducer