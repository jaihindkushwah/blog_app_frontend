import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserProfile {
  // profile which is send while login
  name: string;
  email: string;
  role: "admin" | "user" | string;
  avatar?:
    | {
        url: string;
        publicId: string;
      }
    | undefined;
  id: string;
}
interface AuthSlice {
  profile: UserProfile | null;
  loggedIn: boolean;
  token: string | null;
}

const initialState: AuthSlice = {
  profile: null,
  loggedIn: false,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfile: (state, { payload }: PayloadAction<UserProfile | null>) => {
      state.profile = payload;
    },
    updateLoggedInState: (state, { payload }) => {
      state.loggedIn = payload;
    },
    updateToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { updateLoggedInState, updateProfile, updateToken } =
  slice.actions;

export default slice.reducer;

export const getAuthState = createSelector(
  (state: RootState) => state.auth,
  (authState) => ({
    ...authState,
  })
);
