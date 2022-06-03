import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userState {
  loggedin: boolean
  username: string
}

const initialUserState: userState = {
  loggedin: false,
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.loggedin = true
      state.username = action.payload
    },
    logout: (state) => {
      state.loggedin = false
      state.username = ''
    },
  },
})
