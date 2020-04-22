import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import alertContext from './alertContext'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = ({ children }) => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    //Set alert
    const setAlert = (msg, type) => {
        const id = uuidv4()
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000)
    }

    return (
        <alertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {children}
        </alertContext.Provider>
    )
}

export default AlertState