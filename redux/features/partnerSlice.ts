import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getPartners,
  addPartner,
  updatePartner as updatePartnerApi,
  deletePartner as deletePartnerApi,
} from "@/services/adminService";
import { RootState } from "../store";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

interface PartnerState {
  partners: Partner[];
  loading: boolean;
  error: string | null;
}

const initialState: PartnerState = {
  partners: [],
  loading: false,
  error: null,
};

export const fetchPartners = createAsyncThunk<
  Partner[],
  { token: string },
  { state: RootState; rejectValue: string }
>("partners/fetchAll", async ({ token }, { getState, rejectWithValue }) => {
  try {
    return await getPartners(token || "");
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch partners");
  }
});

export const createPartner = createAsyncThunk<
  Partner,
  FormData,
  { state: RootState; rejectValue: string }
>("partners/create", async (formData, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    return await addPartner(formData, token!);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to add partner");
  }
});

export const updatePartner = createAsyncThunk<
  Partner,
  { id: string; formData: FormData },
  { state: RootState; rejectValue: string }
>(
  "partners/update",
  async ({ id, formData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      return await updatePartnerApi(id, formData, token!);
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to update partner");
    }
  }
);

export const deletePartner = createAsyncThunk<
  string,
  string,
  { state: RootState; rejectValue: string }
>("partners/delete", async (id, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    return await deletePartnerApi(id, token!);
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to delete partner");
  }
});

const partnerSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPartners.fulfilled,
        (state, action: PayloadAction<Partner[]>) => {
          state.loading = false;
          state.partners = action.payload;
        }
      )
      .addCase(fetchPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(createPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createPartner.fulfilled,
        (state, action: PayloadAction<Partner>) => {
          state.loading = false;
          state.partners.unshift(action.payload);
        }
      )
      .addCase(createPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(
        updatePartner.fulfilled,
        (state, action: PayloadAction<Partner>) => {
          state.loading = false;
          const idx = state.partners.findIndex(
            (p) => p.id === action.payload.id
          );
          if (idx !== -1) state.partners[idx] = action.payload;
        }
      )
      .addCase(
        deletePartner.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.partners = state.partners.filter(
            (p) => p.id !== action.payload
          );
        }
      );
  },
});

export default partnerSlice.reducer;
