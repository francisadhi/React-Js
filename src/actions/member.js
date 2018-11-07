import axios from 'axios'

export const addMembers = (members) => ({
        type: 'ADD_MEMBERS',
        payload: {
            members: members,
    }
})

export const fetchMembers = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/people/')
            .then(respone => {
                const members = respone.data.results

                dispatch({
                    type: 'ADD_MEMBERS',
                    payload: {
                        members: members
                    }
                })
            })
    }
}