import { LogflareUserOptionsI } from "@atdrago/logflare-transport-core"
import stream from "stream"

import { addLogflareTransformDirectives, toLogEntry } from "./utils"

const createConsoleWriteStream = (options: LogflareUserOptionsI) => {
  const writeStream = new stream.Writable({
    objectMode: true,
    highWaterMark: 1,
  })

  writeStream._write = (chunk: any, encoding: any, callback: any) => {
    const batch = Array.isArray(chunk) ? chunk : [chunk]
    batch
      .map((chunkItem) => JSON.parse(chunkItem))
      .map(toLogEntry)
      .map((logEntry: Record<string, any>) =>
        addLogflareTransformDirectives(logEntry, options)
      )
      .map((chunkItem) => JSON.stringify(chunkItem))
      .forEach((x) => {
        process.stdout.write(x + "\n")
      })

    callback()
  }
  return writeStream
}

export default createConsoleWriteStream
