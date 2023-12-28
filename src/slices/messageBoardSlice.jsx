// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageText: "",
  messageTextArray: [],
};

export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    createMessageText: (state, action) => {
      state.messageText = action.payload;
    },
    addMessageText: (state) => {
      state.messageTextArray.push(state.messageText);
      state.messageText = "";
    },
    deleteMessageText: (state, action) => {
      state.messageTextArray.splice(action.payload, 1);
    },
  },
});
// export action ไปใช่กับปุ่ม
export const { createMessageText, addMessageText, deleteMessageText } =
  messageBoardSlice.actions;
//export state ไปใส่ store
export default messageBoardSlice.reducer;
