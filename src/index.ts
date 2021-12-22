import createConsoleWriteStream from "./consoleStream"
import {
  Level,
  LogEvent,
  formatPinoBrowserLogEvent,
  addLogflareTransformDirectives,
} from "./utils"
import {
  LogflareHttpClient,
  LogflareUserOptionsI,
} from "@atdrago/logflare-transport-core"

const createPinoBrowserSend = (options: LogflareUserOptionsI) => {
  const client = new LogflareHttpClient({ ...options, fromBrowser: true })

  return (level: Level | number, logEvent: LogEvent) => {
    const logflareLogEvent = formatPinoBrowserLogEvent(logEvent)
    const maybeWithTransforms = addLogflareTransformDirectives(
      logflareLogEvent,
      options
    )
    client.postLogEvents([maybeWithTransforms])
  }
}

const logflarePinoVercel = (options: LogflareUserOptionsI) => {
  return {
    stream: createConsoleWriteStream(options),
    send: createPinoBrowserSend(options),
  }
}

export { logflarePinoVercel }
