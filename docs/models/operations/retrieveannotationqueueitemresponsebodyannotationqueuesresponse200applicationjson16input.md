# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson16Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson16Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson16Input =
    {
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "input_guardrail",
      displayName: "Nettie_Stamm7",
      description: "airbus less curiously",
    };
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `evaluatorId`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `evaluatorType`                                                      | [operations.EvaluatorType](../../models/operations/evaluatortype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `evalType`                                                           | [operations.EvalType](../../models/operations/evaltype.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `outputType`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `expectedValue`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `displayName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `input`                                                              | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | N/A                                                                  |