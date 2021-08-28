import { IEventHandlingServices } from '@app/services/event'
import { IHttpRequest, IHttpResponse } from 'src/typings'

export const Test = (services: IEventHandlingServices) => {
  return async (httpRequest: IHttpRequest): Promise<IHttpResponse> => {
    return await new Promise((res) =>
      setTimeout(res, 1000, {
        statusCode: 200,
        message: 'test!!!',
      }),
    )
  }
}
