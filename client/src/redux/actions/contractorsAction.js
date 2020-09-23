import {usersApi} from "../../api/api";

export const fetchUsers = () => async (dispatch) => {
    const data = await usersApi.getContractors()
    dispatch(setContractors(data))
}

export const setContractors = (items) => ({
    type: 'CONTRACTORS_SET_CONTRACTORS',
    payload: items
})