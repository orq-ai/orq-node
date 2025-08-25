# CreateResponse2Proxy2

Represents the output of a function tool call, provided as input to the model.

## Example Usage

```typescript
import { CreateResponse2Proxy2 } from "@orq-ai/node/models/operations";

let value: CreateResponse2Proxy2 = {
  type: "function_call_output",
  callId: "<id>",
  output: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.CreateResponse2ProxyRequestRequestBodyType](../../models/operations/createresponse2proxyrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                             | The type of input item                                                                                                         |
| `callId`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the function call this output is for                                                                                 |
| `output`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The output from the function call                                                                                              |