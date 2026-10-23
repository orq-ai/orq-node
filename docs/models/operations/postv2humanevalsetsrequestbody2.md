# PostV2HumanEvalSetsRequestBody2

## Example Usage

```typescript
import { PostV2HumanEvalSetsRequestBody2 } from "@orq-ai/node/models/operations";

let value: PostV2HumanEvalSetsRequestBody2 = {
  displayName: "Reyes.Kertzmann58",
  humanEvalIds: [
    "<id 1>",
    "<id 2>",
  ],
  filterType: "name",
  filterValue: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `displayName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Display name of the human review set                                     |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Detailed description of the human review set                             |
| `humanEvalIds`                                                           | *string*[]                                                               | :heavy_check_mark:                                                       | Array of human review IDs to be applied to matching spans                |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Optional project ID to scope this human review set to a specific project |
| `filterType`                                                             | *"name"*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `filterValue`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Name pattern to match                                                    |