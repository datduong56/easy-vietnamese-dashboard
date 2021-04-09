import ConnectionInstance from "./connection-instance";

export const login = (data: any) => {
  return ConnectionInstance.post("/auth/login", data);
};
