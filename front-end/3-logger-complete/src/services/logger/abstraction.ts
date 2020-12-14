export enum LogLevel {
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5
}

type LogFunction = (message: string, data?: any) => void

export interface ILogger {
  debug: LogFunction
  info: LogFunction
  warn: LogFunction
  error: LogFunction
  fatal: LogFunction
}

export interface ILoggerFactory {
  create: (name: string) => ILogger
}

export interface ILogEntry {
  level: string,
  message: string,
  data?: any,
  date: Date,
  context?: any
}

export interface ILogAppender {
  append: (logEntry:ILogEntry) => void
}
