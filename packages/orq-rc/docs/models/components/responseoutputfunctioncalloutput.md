# ResponseOutputFunctionCallOutput

The result of a function call.

## Example Usage

```typescript
import { ResponseOutputFunctionCallOutput } from "@orq-ai/node/models/components";

let value: ResponseOutputFunctionCallOutput = {
  callId: "<id>",
  type: "function_call_output",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `callId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID that links a tool call to its output.                                                                       |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The unique ID of the item.                                                                                         |
| `output`                                                                                                           | *components.Output*                                                                                                | :heavy_minus_sign:                                                                                                 | The function result: a string, or an array of content parts.                                                       |
| `status`                                                                                                           | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The item status, such as `completed`, `in_progress` or `incomplete`.                                               |
| `type`                                                                                                             | [components.ResponseOutputFunctionCallOutputType](../../models/components/responseoutputfunctioncalloutputtype.md) | :heavy_check_mark:                                                                                                 | The item type. Discriminates the item.                                                                             |
| `additionalProperties`                                                                                             | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |