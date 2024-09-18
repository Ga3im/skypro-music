import { getToken, regUser, regUserType, signinUser } from "@/api/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthStateType = {
  authState: boolean;
  user: string | null;
  token: TokensType | null;
};

type TokensType = {
  access: string;
  refresh: string;
};

export const getUser = createAsyncThunk(
  "user/registry",
  async ({ email, password }: regUserType) => {
    return await regUser({ email, password });
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: regUserType) => {
    return await signinUser({ email, password });
  }
);

export const Token = createAsyncThunk(
  "user/token",
  async ({ email, password }: regUserType) => {
    return await getToken({ email, password });
  }
);

const initialState: AuthStateType = {
  authState: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    logout:(state)=>{
      state.user = null;
    },
    tokenDel:(state) =>{
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.error("Error:", action.error.message);
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction) => {
        state.user = action.payload;
      })
      .addCase(Token.fulfilled, (state, action: PayloadAction<TokensType>) => {
        state.token = action.payload;
      });
  },
});

export const { logout, tokenDel, setAuthState } = authSlice.actions;
export const  authReducer   = authSlice.reducer;
