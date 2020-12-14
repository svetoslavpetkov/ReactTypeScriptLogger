import { ILogger, LogLevel } from "./abstraction";

const levelMapping = [
  { level: LogLevel.Debug, text: "DEBUG" },
  { level: LogLevel.Info, text: "INFO" },
  { level: LogLevel.Warn, text: "WARNING" },
  { level: LogLevel.Error, text: "ERROR" },
  { level: LogLevel.Fatal, text: "FATAL" }
]

export class Logger implements ILogger {  

  debug (message: string, data?: any) {
    this.log(LogLevel.Debug, message, data)
  }

  info (message: string, data?: any) {
    this.log(LogLevel.Info, message, data)
  }

  warn (message: string, data?: any) {
    this.log(LogLevel.Warn, message, data)
  }

  error (message: string, data?: any) {
    this.log(LogLevel.Error, message, data)
  }
  
  fatal (message: string, data?: any) {
    this.log(LogLevel.Error, message, data)
  }


  protected log(level: LogLevel, message: string, data?: any) {
    console.log(`${this.getLevelString(level)} - ${message}`)
  }

  protected getLevelString(level: LogLevel) {
    return levelMapping.find(m => m.level === level)?.text;
  }
}