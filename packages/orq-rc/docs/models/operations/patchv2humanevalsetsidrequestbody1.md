# PatchV2HumanEvalSetsIdRequestBody1

## Example Usage

```typescript
import { PatchV2HumanEvalSetsIdRequestBody1 } from "@orq-ai/node/models/operations";

let value: PatchV2HumanEvalSetsIdRequestBody1 = {
  displayName: "Torrance39",
  humanEvalIds: [],
  filterType: "span_type",
  filterValues: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `displayName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Display name of the human review set                                     |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Detailed description of the human review set                             |
| `humanEvalIds`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | Array of human review IDs to be applied to matching spans                |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Optional project ID to scope this human review set to a specific project |
| `filterType`                                                             | *"span_type"*                                                            | :heavy_check_mark:                                                       | N/A                                                                      |
| `filterValues`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | Array of span types to match                                             |