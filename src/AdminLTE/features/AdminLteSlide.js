import {
    createSlice,
    // nanoid,
    //createAsyncThunk,
    // createSelector,
   // createEntityAdapter,
  } from '@reduxjs/toolkit'

  

  const initialState = {
    params: {
        window : {
            size : {
                width: 1800,
                height: 400
            },
            autoCollapseSize : 992,
            leftMenuCollapsed : true,
            leftMenuOpen : true,
        },
    },
    status: 'idle',
    error: null
  }
 


  const adminlte3Slice = createSlice({
    name: 'adminlte',
    initialState,
    reducers: {
        updateWindowSize(state, action) {
            const { width,height  } = action.payload
            state.params.window.size = { width: width, height : height};
            
        },
        updateleftMenuCollapsed(state , action){
            const { status  } = action.payload
            state.params.window.leftMenuCollapsed = status
        },
        updateleftMenuOpen(state , action){
            const { status  } = action.payload
            state.params.window.leftMenuOpen = status
        },
        // postUpdated(state, action) {
        //     const { id, title, content } = action.payload
        //     const existingPost = state.entities[id]
        //     if (existingPost) {
        //       existingPost.title = title
        //       existingPost.content = content
        //     }
        //   },
      // other reducers
    },
    extraReducers: {


    },
  })

export const { updateWindowSize ,updateleftMenuCollapsed , updateleftMenuOpen } = adminlte3Slice.actions
export default adminlte3Slice.reducer

export const getParams = (state) => state.adminlte.params;


// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId)