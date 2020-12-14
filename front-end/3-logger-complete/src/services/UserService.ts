import { IAppConfig, IServiceLocator, IUserService, IUserToken } from "./abstraction";
import data from "../config.json"
import { BaseApi } from "./api/BaseApi";

export class UserService extends BaseApi implements IUserService {  


  async login(username: string, password: string) : Promise<boolean> {
    try {
      const token = await this.post("/auth", { username, password } ,true);
      localStorage.setItem("userToken", JSON.stringify(token));
      return true;
    } catch (ex) {
      return false;
    }
  }  

  getUserToken(): IUserToken {
    return JSON.parse(localStorage["userToken"]) as IUserToken;
  }
}