import axios from "axios";

const url = "http://localhost:8000/api/";

const fetchProfile = async () => {
  console.log("fetchProfile");
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const response = await axios.get(url + "profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const postLogin = async (email, password) => {
  const response = await axios.post(url + "login", {
    email,
    password,
  });
  return response.data;
};

const postRegister = async (name, email, password) => {
  const response = await axios.post(url + "register", {
    name,
    email,
    password,
    c_password: password,
  });
  return response.data;
};

const postLogout = async () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const response = await axios.post(
    url + "logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const postResetPassword = async (email) => {
  const response = await axios.post(url + "password/reset", {
    email,
  });
  return response.data;
};

const postChangePassword = async (password, password_confirmation) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const response = await axios.post(
    url + "password/change",
    {
      password,
      password_confirmation,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export {
  fetchProfile,
  postLogin,
  postRegister,
  postLogout,
  postResetPassword,
  postChangePassword,
};
