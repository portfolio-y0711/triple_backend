import { IEventHandlingService as IEventHandlingService } from '@app/services/event'
import { IHttpRequest, IHttpResponse } from '@app/typings'

export const PostEvent = (service: IEventHandlingService) => {
  return async (httpRequest: IHttpRequest): Promise<IHttpResponse> => {
    const { body } = httpRequest
    service.handleEvent(body)
    return await new Promise((res) =>
      setTimeout(res, 1000, {
        statusCode: 200,
        message: 'events registered successfully!!!!',
      }),
    )
  }
}
