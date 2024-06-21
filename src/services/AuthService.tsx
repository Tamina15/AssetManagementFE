import axios from "axios";
import { LogInModel } from "../models/LogInModel";
import { AZURE_SERVICE_API, CORS_CONFIG } from "../utils/Config";
import { ChangePasswordModel } from "../models/ChangePasswordModel";

export const login = async (data: LogInModel) => await axios.post(`${AZURE_SERVICE_API}/auth/signIn`, data, CORS_CONFIG);
export const logout = async () => await axios.post(`${AZURE_SERVICE_API}/auth/logout`, null, CORS_CONFIG);
export const changePassword = async (pswdData: ChangePasswordModel) => await axios.patch(`${AZURE_SERVICE_API}/users/password`, pswdData, CORS_CONFIG);