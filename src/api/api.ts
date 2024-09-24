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
  if (response.status === 400) {
    throw new Error("не передан пароль или логин");
  }
  if (response.status === 401) {
    throw new Error("Пользователь с таким email или паролем не найден");
  }
  if (response.status === 403) {
    throw new Error('Введенный Email уже занят')
  }
  if (response.status === 412) {
    throw new Error("Неправильный формат Email");
  }
  if (response.status === 500) {
    throw new Error("Сервер не отвечает");
  }
  if (response.ok) {
    return response.json();
  }
};

export const signinUser = async ({ email, password }: regUserType) => {
  const response = await fetch(`${BASE_URL}/user/login/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 400) {
    throw new Error("не передан пароль or login");
  }
  if (response.status === 401) {
    throw new Error("Пользователь с таким email или паролем не найден");
  }
  if (response.status === 412) {
    throw new Error("412");
  }
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  if (response.ok) {
    return response.json();
  }
};

export const getToken = async ({ email, password }: regUserType) => {
  const response = await fetch(`${BASE_URL}/user/token/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка");
  }
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
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  return response.json();
};


export const getFavoriteTracks = async () => {
  const response = await fetch(`${BASE_URL}/catalog/track/favorite/all/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  return response.json();
};