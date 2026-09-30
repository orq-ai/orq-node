# EvaluatorResponseHttp

## Example Usage

```typescript
import { EvaluatorResponseHttp } from "@orq-ai/node/models/components";

let value: EvaluatorResponseHttp = {
  id: "<id>",
  description:
    "and slime corporation um because resort ligate good-natured lonely violin",
  type: "http_eval",
  outputType: "string",
  url: "https://oblong-ocelot.name",
  method: "GET",
  headers: {},
  payload: {
    "key": "<value>",
    "key1": "<value>",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `created`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `updated`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `updatedById`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Unique identifier of the project owning this evaluator.                                                  |
| `guardrailConfig`                                                                                        | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"http_eval"*                                                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outputType`                                                                                             | [components.EvaluatorResponseHttpOutputType](../../models/components/evaluatorresponsehttpoutputtype.md) | :heavy_check_mark:                                                                                       | The type of output expected from the evaluator                                                           |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `method`                                                                                                 | [components.Method](../../models/components/method.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `headers`                                                                                                | Record<string, *string*>                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `payload`                                                                                                | Record<string, *any*>                                                                                    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `key`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |