import ConnectionInstance from "./connection-instance";

export const login = (data) => {
  return ConnectionInstance.post("/auth/login", data);
};
