import { LOG_LEVEL } from '../LOG_LEVEL';
import { Log } from '../Log';

export interface ILoggerTransport {
  log: (log:Log, level: LOG_LEVEL) => void;
  setLogLevel: (level: LOG_LEVEL) => LOG_LEVEL;
  getLogLevel: (level: LOG_LEVEL) => LOG_LEVEL;
}
