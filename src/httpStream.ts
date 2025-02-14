import { LogflareUserOptionsI } from "@atdrago/logflare-transport-core"
import { LogflareHttpStreamClient } from "@atdrago/logflare-transport-core/dist/http_stream_client"
import * as streams from "./streams"

const pumpify = require("pumpify")

interface Options extends LogflareUserOptionsI {
  size?: number
}

function createWriteStream(options: Options) {
  const { size = 1 } = options

  const parseJsonStream = streams.parseJsonStream()
  const toLogEntryStream = streams.toLogEntryStream(options)
  const batchStream = streams.batchStream(size)
  const writeStream = new LogflareHttpStreamClient(options).insertStream()

  return pumpify(parseJsonStream, toLogEntryStream, batchStream, writeStream)
}

export default createWriteStream
