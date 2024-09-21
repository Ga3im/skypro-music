import { TokensType } from "@/store/feautures/authSlice";
import { TrackType } from "@/types/tracks";

export type regUserType = {
  email: string;
  password: string;
};

export const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com";

export const getTracks = async (): Promise<TrackType[]> => {
  const res = await fetch(BASE_URL + "/catalog/track/all/");
  if (!res.ok) {
    throw new Error("Ошибка в запросе");
  }
  return res.json().then((tracksData) => tracksData.data);
};

export const regUser = async ({ email, password }: regUserType) => {
  const response = await fetch(`${BASE_URL}/user/signup/`, {
    method: "POST",
    body: JSON.stringify({ email, password, username: email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  return response.json();
};

export const signinUser = async ({ email, password }: regUserType) => {
  const response = await fetch(`${BASE_URL}/user/login/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
   if (response.status === 500) {
    throw new Error('Сервер сломался')
   }
    return response.json();  
};

export const getToken = async ({ email, password }: regUserType) => {
  const response = await fetch(`${BASE_URL}/user/token/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  return response.json();
};


export const updateKey = async ({ refresh }: TokensType) => {
  const response = await fetch(`${BASE_URL}/user/token/refresh/`, {
    method: "POST",
    body: JSON.stringify({ refresh }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};