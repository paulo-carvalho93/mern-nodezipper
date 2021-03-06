import axios from "axios";

export async function loginUser(data) {
  try {
    const response = await axios.post("api/users/login", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function createUser(data) {
  try {
    const response = await axios.post("api/users", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}