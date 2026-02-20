# ResponseBodyFunction

## Example Usage

```typescript
import { ResponseBodyFunction } from "@orq-ai/node/models/operations";

let value: ResponseBodyFunction = {
  id: "<id>",
  description: "pish mortally likely legitimize awareness easily zowie",
  type: "function_eval",
  functionParams: {
    type: "rouge_n",
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
| `guardrailConfig`                                                                                                              | *operations.UpdateEvalResponseBodyEvalsResponse200GuardrailConfig*                                                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.UpdateEvalResponseBodyEvalsResponse200Type](../../models/operations/updateevalresponsebodyevalsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `functionParams`                                                                                                               | *operations.ResponseBodyFunctionParams*                                                                                        | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `key`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |