import { TokensType } from "@/store/feautures/authSlice";
import { useAppSelector } from "@/store/store";
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
    throw new Error("Введенный Email уже занят");
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

export const refreshToken = async ({ refresh }: TokensType) => {
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

export async function fetchWithAuth(BASE_URL:string, options, refresh:TokensType) {
  let res = await fetch(BASE_URL, options);

  if (res.status === 401) {
    const newAccessToken = await refreshToken(refresh); 

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${newAccessToken}`,
    };
    res = await fetch(BASE_URL, options); 
  }

  if (!res.ok) {
    throw new Error(res.statusText); 
  }

  return res; 
}

export const getFavoriteTracks = async ({ access }: TokensType) => {
  const response = await fetch(`${BASE_URL}/catalog/track/favorite/all/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  return response.json().then((tracksData) => tracksData.data);
};

export const likeTrack = async (trackId: TrackType, access:TokensType) => {
  const res = await fetch(`${BASE_URL}/catalog/track/${trackId}/favorite/`, {
    method: "POST",
    body: JSON.stringify({
      access
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  });
  console.log(trackId)
  console.log(access)
  if (!res.ok) {
    throw new Error("НЕ удалось добавить трек, сервер не отвечает");
  }
  return res.json();
};

export const deleteTrack = async (trackId: TrackType, {access}:TokensType) => {
  const res = await fetch(`${BASE_URL}/catalog/track/${trackId}/favorite/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  });
  if (!res.ok) {
    throw new Error("НЕ удалось удалить трек, сервер не отвечает");
  }
  return res.json();
};
