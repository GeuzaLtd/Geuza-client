import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllMessages } from "@/services/adminService";

export interface MessageItem {
  id: string;
  fullName: string;
  email?: string;
  phone?: string;
  organizationType?: string;
  message: string;
  status: "read" | "unread";
  createdAt: string;
}

interface MessagesState {
  messages: MessageItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllMessages.fulfilled,
        (state, action: PayloadAction<MessageItem[]>) => {
          state.loading = false;
          state.messages = action.payload || [];
        }
      )
      .addCase(getAllMessages.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to load messages";
      });
  },
});

export default messagesSlice.reducer;
