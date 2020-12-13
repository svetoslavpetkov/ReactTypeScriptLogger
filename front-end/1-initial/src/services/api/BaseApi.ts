import { AppService, IConfigService, IServiceLocator, IUserService } from "../abstraction";
import { BaseService } from "../BaseService";
import axios, { AxiosRequestConfig, Method } from "axios"
import { ParserUtil } from "../../util/ParserUtils";

axios.request({ method: "DELETE" })

interface IIndexer {
  [s: string]: any
}


interface IRequestParams {
  url: string
  payload?: IIndexer
  anonymous?: boolean
}

interface IAllRequestParams extends IRequestParams {
  method: Method
}

export abstract class BaseApi extends BaseService {

  baseUrl: string;

  constructor(serviceLocator: IServiceLocator) {
    super(serviceLocator);
    const config = serviceLocator.get<IConfigService>(AppService.ConfigService);
    this.baseUrl = config.getAppConfig().backEndUrl;    
  }

  protected do<T>(params: IAllRequestParams): Promise<T> {    

    const headers = params.anonymous
      ? {}
      :  { "user-token" : JSON.stringify(this.serviceLocator.get<IUserService>(AppService.UserService).getUserToken()) }

    const input: AxiosRequestConfig = {
      url: `${this.baseUrl}${params.url}`,
      method: params.method,
      data: params.payload,
      headers: headers
    }

    return axios
      .request(input)
      .then(r => {
        if(r.data) {
          let result = Object.assign({}, r.data);
          ParserUtil.prepareObject(result)
          return result
        } else {
          return r.data
        }
      })
  }

  protected get<T>(url: string, anonymous: boolean = false) : Promise<T> {
    return this.do({
      url,
      method: "GET",
      anonymous
    })
  }

  protected post<T>(url: string, payload: IIndexer , anonymous: boolean = false) : Promise<T> {
    return this.do({
      url,
      method: "POST",
      payload,
      anonymous
    })
  }

}