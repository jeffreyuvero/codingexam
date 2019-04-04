import {GET_LOCATIONS} from './types'
import axios from 'axios'


export const getLocation = () => async dispatch => {
	const res = await axios.get()
	dispatch({
		type: GET_POSTS,
		payload: res.data
	})
}; 