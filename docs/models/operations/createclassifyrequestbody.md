# CreateClassifyRequestBody

## Example Usage

```typescript
import { CreateClassifyRequestBody } from "@orq-ai/node/models/operations";

let value: CreateClassifyRequestBody = {
  model: "911",
  questions: {},
  state: {
    "key": "Connecticut",
    "key1": "Indiana",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `identity`                                                                                         | [components.ResponseIdentity](../../models/components/responseidentity.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | Key-value metadata attached to the trace.                                                          |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the classify model to use, for example typesafe/jev-latest.                                  |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The name to display on the trace. If not specified, the default system name will be used.          |
| `questions`                                                                                        | Record<string, *operations.Questions*>                                                             | :heavy_check_mark:                                                                                 | Typed questions keyed by an identifier of your choice. Each answer is returned under the same key. |
| `retry`                                                                                            | [components.ClassifyRetryConfig](../../models/components/classifyretryconfig.md)                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `state`                                                                                            | *operations.State*                                                                                 | :heavy_check_mark:                                                                                 | The content to evaluate. A string, an object or an array.                                          |