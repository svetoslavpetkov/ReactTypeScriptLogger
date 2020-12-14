import { ILogAppender, ILogEntry } from "../abstraction";

export class ConsoleAppender implements ILogAppender {

  append(logEntry: ILogEntry) {
    console.log(`${logEntry.level} - ${logEntry.date} - ${logEntry.message}`);
  }
}