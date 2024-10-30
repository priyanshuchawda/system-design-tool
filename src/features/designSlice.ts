import { createSlice } from '@reduxjs/toolkit';

interface DesignState {
    components: any[]; // Define your component structure
}

const initialState: DesignState = {
    components: [],
};

const designSlice = createSlice({
    name: 'design',
    initialState,
    reducers: {
        addComponent: (state, action) => {
            state.components.push(action.payload);
        },
        // Add more reducers as needed
    },
});

export const { addComponent } = designSlice.actions;
export default designSlice.reducer;