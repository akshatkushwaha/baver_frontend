import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    active: false,
    age: "",
    contact: "",
    createdAt: "",
    dob: "",
    email: "",
    email_verified_at: "",
    google_id: "",
    id: "",
    name: "",
    profile_photo_url: "",
    profile_photo_path: "",
    role: "",
    two_factor_confirmed_at: "",
    updatedAt: "",
  },
  reducers: {
    setLoginStatus: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setLoginStatus } = userDataSlice.actions;

export default userDataSlice.reducer;
