import {
    BeforeRequestHook,
    BeforeRequestContext
  } from "./types";
  
  export class GlobalHook implements BeforeRequestHook {
    async beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request> {
      const contactId = request.headers.get('contactId')
      if (contactId) {
        request.headers.set('x-orq-contact-id', contactId);
        request.headers.delete('contactId')
      }
  
      const environment = request.headers.get('environment')
      
      // if the operation is related to deployment invoke & invoke stream
      if (["DeploymentInvoke", "DeploymentStream"].includes(hookCtx.operationID) && environment) {
        request.headers.delete('environment')
        const payload = await request.json()
  
        if ('context' in payload && typeof payload.context === 'object') {
          payload.context.environment = environment;
        } else {
          payload.context = {
            environment
          }
        }
        return new Request(request.url, {
          method: request.method,
          headers: request.headers,
          body: JSON.stringify(payload),
          signal: request.signal
        });
      }
  
      return request;
    }
  }