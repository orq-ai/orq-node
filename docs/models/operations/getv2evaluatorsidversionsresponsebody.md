# GetV2EvaluatorsIdVersionsResponseBody

Evaluator versions retrieved

## Example Usage

```typescript
import { GetV2EvaluatorsIdVersionsResponseBody } from "@orq-ai/node/models/operations";

let value: GetV2EvaluatorsIdVersionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      createdAt: "1705480751606",
      updatedAt: "1735644349842",
      version: "<value>",
      checksum: "<value>",
      entityType: "<value>",
      entityId: "<id>",
      data: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      workspaceId: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | [operations.GetV2EvaluatorsIdVersionsObject](../../models/operations/getv2evaluatorsidversionsobject.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [operations.GetV2EvaluatorsIdVersionsData](../../models/operations/getv2evaluatorsidversionsdata.md)[]   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hasMore`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |