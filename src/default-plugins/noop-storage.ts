import { EventEmitter } from 'events'

export default class NoopStorage extends EventEmitter implements StoragePlugin {
  private data: any
  public description: string
  public isReady: boolean

  constructor (options: any) {
    super()
    this.isReady = true
    this.data = {}
    this.description = 'noop storage'
  }

  set (key: string, value: object, callback: Function) {
    callback(null)
  }

  get (key: string, callback: Function) {
    callback(null, null)
  }

  delete (key: String, callback: Function) {
    callback(null)
  }
}
