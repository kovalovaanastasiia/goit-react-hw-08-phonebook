import axios from "axios";
import {toast} from "react-toastify";

const toastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const authInterceptor = (config) => {
  config.headers["Authorization"] = JSON.parse(localStorage.getItem("token")) ?? "";
  return config;
};

instance.interceptors.request.use(authInterceptor);

export const getContacts = async (_, thunkApi) => {
  try {
    const {data} = await instance.get("/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

export const createContacts = async (contact, thunkApi) => {
  try {
    const {data} = await instance.post("/contacts", contact);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

export const deleteContacts = async (id, thunkApi) => {
  try {
    const {data} = await instance.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

export const signUp = async (body, thunkApi) => {
  try {
    const {data} = await instance.post("/users/signup", body);
    localStorage.setItem("token", JSON.stringify(data.token));
    toast.success("You have successfully registered in to the system!", toastOptions)
    return data;
  } catch (error) {
    toast.error("Something went wrong...", toastOptions);
    return thunkApi.rejectWithValue(error.message);
  }
};

export const logIn = async (body, thunkApi) => {
  try {
    const {data} = await instance.post("/users/logIn", body);
    localStorage.setItem("token", JSON.stringify(data.token));
    toast.success("You have successfully logged in to the system!", toastOptions)
    return data;
  } catch (error) {
    toast.error("Such user is not signed in to the system", toastOptions);
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getProfile = async (_, thunkApi) => {
  try {
    const {data} = await instance.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

export const logOut = async (_, thunkApi) => {
  try {
    const {data} = await instance.post("/users/logout");
    localStorage.removeItem("token");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};
