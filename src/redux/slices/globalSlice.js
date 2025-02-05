import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
    name: 'global',

    initialState: {
        theme: 'dark',
    },

    reducers : {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    }
});

export const { toggleTheme } = globalSlice.actions;
export default globalSlice.reducer;