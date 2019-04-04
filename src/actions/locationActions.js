import {GET_LOCATIONS } from './types'
import axios from 'axios'

export const getLocation = (params) => async dispatch => {
	const res = await axios.get(`https://www.metaweather.com/api/location/search/?query=` + params)
	.then(
        res => {
        	dispatch({
        		type: GET_LOCATIONS,
        		payload: res.data
        	})
        }
    ).catch (
        err => {
        	console.log('error')
            console.log(err)
        }

    )
	
}; 