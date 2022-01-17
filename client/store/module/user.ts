import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserType = {
    id: string;
    email: string;
};

const initialState: UserType = {
    id: null,
    email: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
        logout: state => state = initialState,
    },
});

const { actions, reducer } = userSlice;
export const { setUser, logout } = actions;

export default reducer;
