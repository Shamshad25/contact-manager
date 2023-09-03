import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IContact } from "../model/IContact";

interface ContactState {
  contacts: IContact[];
  cases: object[];
}

const initialState: ContactState = {
  contacts: [
    {
      firstName: "Shamshad",
      lastName: "Alam",
      status: "active",
      userId: "11111111111111111",
    },
    {
      firstName: "John",
      lastName: "Doe",
      status: "active",
      userId: "222222222222222222",
    },
    {
      firstName: "Max",
      lastName: "Miller",
      status: "active",
      userId: "33333333333333",
    },
  ],
  cases: [],
};

export const fetchCases = createAsyncThunk("cases/fetch", async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries", {
    method: "GET",
  });
  const datas = response.json();
  console.log("DATA", datas);
  return datas;
});

export const FormSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IContact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<IContact>) => {
      state.contacts = state.contacts.filter(
        (user) => user.userId !== action.payload.userId
      );
    },
    updateContact: (state, action: PayloadAction<IContact>) => {
      state.contacts = state.contacts.map((user) => {
        if (user.userId === action.payload.userId) {
          return action.payload;
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, action) => {
      state.cases = action.payload;
      console.log("FROM API", state.cases);
    });
  },
});

export default FormSlice.reducer;
export const { addContact, deleteContact, updateContact } = FormSlice.actions;
