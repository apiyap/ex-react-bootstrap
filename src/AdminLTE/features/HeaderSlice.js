import {
    createSlice,
    // nanoid,
    // createAsyncThunk,
    // createSelector,
    // createEntityAdapter,
  } from '@reduxjs/toolkit'


  const initialState = {
    params: {
        bodyWidth: 1024,
    },
    status: 'idle',
    error: null
  }

  const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        updateBodyWidth(state, action) {
            state.params.bodyWidth = action.payload;
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

export const { updateBodyWidth } = headerSlice.actions
export default headerSlice.reducer

export const getBodyWidth = (state) => state.header.params.bodyWidth

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId)
