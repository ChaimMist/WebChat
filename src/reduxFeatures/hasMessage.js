import {createSlice} from '@reduxjs/toolkit'

export const hasMessageSlice = createSlice({
    name: 'notificationHash',

    initialState: {
            "main": 0,
            "chaim": 0,
    },
    reducers: {
        addNotificationID: (state, action) => {
            state[action.payload] = 0
        },
        addNotifications: (state, action) => {
            state[action.payload] = state[action.payload] + 1
        },
        removeNotifications: (state, action) => {
            state[action.payload[0]] -= action.payload[1]
        }
    }
})

export const {addNotificationID, addNotifications, removeNotifications} = hasMessageSlice.actions


export default hasMessageSlice.reducer