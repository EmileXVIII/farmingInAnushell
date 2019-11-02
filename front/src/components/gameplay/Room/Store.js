import React from 'react'
import io from 'socket.io-client'
import { userPseudo } from '../../../App'

export const CTX = React.createContext()


export const initState = {
    Team_Chat: [],
}

function reducer(state, action) {
    const { from, msg, topic } = action.payload
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    { from, msg }
                ]
            }
        default:
            return state
    }
}

let socket

function sendChatAction(value) {
    socket.emit('chat message', value)
}



export default function Store(props) {

    const user = userPseudo

    const [allChats, dispatch] = React.useReducer(reducer, initState)


    if (!socket) {
        socket = io(process.env.SERVER_HOST||':8060')
        socket.on('chat message', function (msg) {
            dispatch({ type: 'RECEIVE_MESSAGE', payload: msg })
        })
    }
    /* if(!socket){
        socket = io(':8080')
    }
    socket.off('chat message');
    socket.on('chat message', function(msg){
        dispatch({type:'RECEIVE_MESSAGE', payload: msg})
    })
 */

    return (
        <CTX.Provider value={{ allChats, sendChatAction, user }}>
            {props.children}
        </CTX.Provider>
    )
}