import { configureStore } from '@reduxjs/toolkit'


//import headerReducer from '../features/admin-lte3/HeaderSlice'
import adminLteReducer from '../AdminLTE/features/AdminLteSlide'

export default configureStore({
  reducer: {
    adminlte: adminLteReducer,
    // users: usersReducer,
    // notifications: notificationsReducer,
  },
})
