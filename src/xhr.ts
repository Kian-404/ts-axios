import { AxiosRequestConfig } from '../types'

export function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config

  const requset = new XMLHttpRequest()

  requset.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      requset.setRequestHeader(name, headers[name])
    }
  })

  requset.send(data)
}
