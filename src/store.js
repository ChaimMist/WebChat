import {configureStore} from '@reduxjs/toolkit';
import notificationHash from './reduxFeatures/hasMessage';

export default configureStore({
    reducer: {
        notificationHash: notificationHash
    },
})





