# CreateResponse2Proxy3

Represents a function tool call, provided as input to the model.

## Example Usage

```typescript
import { CreateResponse2Proxy3 } from "@orq-ai/node/models/operations";

let value: CreateResponse2Proxy3 = {
  type: "function_call",
  callId: "<id>",
  id: "<id>",
  name: "<value>",
  arguments: "<value>",
  status: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [operations.CreateResponse2ProxyRequestRequestBodyInputType](../../models/operations/createresponse2proxyrequestrequestbodyinputtype.md) | :heavy_check_mark:                                                                                                                       | The type of input item                                                                                                                   |
| `callId`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the function call                                                                                                              |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The unique identifier for this function call                                                                                             |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The name of the function being called                                                                                                    |
| `arguments`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The arguments to the function as a JSON string                                                                                           |
| `status`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The status of the function call                                                                                                          |