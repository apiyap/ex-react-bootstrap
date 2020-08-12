import { configureStore } from '@reduxjs/toolkit'


//import headerReducer from '../features/admin-lte3/HeaderSlice'
import adminLteReducer from '../features/admin-lte3/AdminLteSlide'

export default configureStore({
  reducer: {
    adminlte: adminLteReducer,
    // users: usersReducer,
    // notifications: notificationsReducer,
  },
})
