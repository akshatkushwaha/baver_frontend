import axios from "axios";

const url = "http://localhost:8000/api/";

const fetchProfile = async () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  // const response = await axios.get(url + "profile", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  const response = await fetch(url + "profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
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

export { fetchProfile, postLogin, postRegister };
