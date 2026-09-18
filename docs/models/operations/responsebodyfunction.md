# ResponseBodyFunction

## Example Usage

```typescript
import { ResponseBodyFunction } from "@orq-ai/node/models/operations";

let value: ResponseBodyFunction = {
  metadata: {},
  id: "<id>",
  displayName: "Kylie10",
  description: "meh astride what culture miserably who sonata pace watery",
  owner: "<value>",
  domainId: "<id>",
  outputType: "string",
  type: "function_eval",
  functionParams: {
    type: "levenshtein_distance",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | [operations.ResponseBodyMetadata](../../models/operations/responsebodymetadata.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `owner`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `updated`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdById`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `updatedById`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `domainId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `projectId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique identifier of the project owning this evaluator.                                              |
| `guardrailConfig`                                                                                    | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `outputType`                                                                                         | [operations.GetEvalResponseBodyOutputType](../../models/operations/getevalresponsebodyoutputtype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *"function_eval"*                                                                                    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `functionParams`                                                                                     | *operations.FunctionParams*                                                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |