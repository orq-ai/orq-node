# ResponseOutputFunctionCall

A request from the model to call one of the functions you declared.

## Example Usage

```typescript
import { ResponseOutputFunctionCall } from "@orq-ai/node/models/components";

let value: ResponseOutputFunctionCall = {
  arguments: "<value>",
  callId: "<id>",
  name: "<value>",
  type: "function_call",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `arguments`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The call arguments as a JSON-encoded string.                                                           |
| `callId`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID that links a tool call to its output. Send it back on the matching `function_call_output` item. |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The unique ID of the item.                                                                             |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The name of the function to call.                                                                      |
| `namespace`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The namespace of the function, when the tool declares one.                                             |
| `status`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The item status, such as `completed`, `in_progress` or `incomplete`.                                   |
| `type`                                                                                                 | [components.ResponseOutputFunctionCallType](../../models/components/responseoutputfunctioncalltype.md) | :heavy_check_mark:                                                                                     | The item type. Discriminates the item.                                                                 |
| `additionalProperties`                                                                                 | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |