import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'Terry Baumbach'},
    {id: '1', name: 'Alex Passidomo'},
    {id: '2', name: 'Haider Mumtaz'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer