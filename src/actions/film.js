import axios from 'axios'

export const fetchFilms = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films/')
            .then(respone => {
                dispatch({
                    type : 'ADD_FILMS',
                    payload : {
                        films: respone.data.results
                    }
                })
            })
    }
}