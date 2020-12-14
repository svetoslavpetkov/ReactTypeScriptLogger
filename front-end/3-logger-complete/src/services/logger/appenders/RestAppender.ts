import { IServiceLocator } from "../../abstraction";
import { BaseApi } from "../../api/BaseApi";
import { ILogAppender, ILogEntry } from "../abstraction";

export class RestAppender extends BaseApi implements ILogAppender {

  logs: Array<ILogEntry> = []
  batchSize: number;

  constructor(serviceLocator: IServiceLocator, config: { batchSize: number }) {
    super(serviceLocator);

    this.batchSize = config.batchSize;
  }


  async append(logEntry: ILogEntry) {

    this.logs.push(logEntry);

    if(this.logs.length >= this.batchSize) {

      const request = this.logs.map(l => ({
        level: l.level,
        date: l.date,
        text: l.message
      }))   
      await this.post("/log", request)
      this.logs = [];
    }    
  }
}