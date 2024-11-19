import { getToken, regUser, regUserType, signinUser } from "@/api/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userType = {
  email: string,
  username: string,
  _id: number,
}

export type AuthStateType = {
  authState: boolean;
  user: userType | null;
  token: TokensType | null;
  error:string;
};

export type TokensType = {
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

export const initialState: AuthStateType = {
  authState: false,
  user: null,
  token: null,
  error: '',
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
    },
    errDel:(state, action)=>{
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
      builder
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.error.message || '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action)=>{
        state.error = action.error.message || '';
      })
      .addCase(Token.fulfilled, (state, action: PayloadAction<TokensType>) => {
        state.token = action.payload;
      })

  },
});

export const { logout, tokenDel, setAuthState, errDel } = authSlice.actions;
export const  authReducer   = authSlice.reducer;
