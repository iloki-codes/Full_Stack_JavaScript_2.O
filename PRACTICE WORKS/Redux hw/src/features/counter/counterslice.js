
const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    value:0
}

const counterSlice = createSlice({
    name:counterSlice,
    initialState,
    reducer: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByValue: (state, action) => { state.value += action.payload }        // payload = input by user
    }
});


export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;
