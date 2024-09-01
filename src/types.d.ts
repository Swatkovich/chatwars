declare type UUID = string

declare type FileStream = {
  canRead: boolean
  canWrite: boolean
  name: string
  isAsync: boolean
  length: number
  position: number
  handle: ReadableStream
  canSeek: boolean
  canTimeout: boolean
  readTimeout: number
  writeTimeout: number
}

declare module 'tiff.js'
