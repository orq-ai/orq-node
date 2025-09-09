# ResponseBodyFunction

## Example Usage

```typescript
import { ResponseBodyFunction } from "@orq-ai/node/models/operations";

let value: ResponseBodyFunction = {
  id: "<id>",
  description: "pish mortally likely legitimize awareness easily zowie",
  type: "function_eval",
  functionParams: {
    type: "cosine_similarity",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `description`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `created`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `updated`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `guardrailConfig`                                                                                                              | *operations.CreateEvalResponseBodyEvalsResponse200GuardrailConfig*                                                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.CreateEvalResponseBodyEvalsResponse200Type](../../models/operations/createevalresponsebodyevalsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `functionParams`                                                                                                               | *operations.CreateEvalResponseBodyFunctionParams*                                                                              | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `key`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |