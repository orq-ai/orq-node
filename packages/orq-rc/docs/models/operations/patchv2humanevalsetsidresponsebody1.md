# PatchV2HumanEvalSetsIdResponseBody1

## Example Usage

```typescript
import { PatchV2HumanEvalSetsIdResponseBody1 } from "@orq-ai/node/models/operations";

let value: PatchV2HumanEvalSetsIdResponseBody1 = {
  id: "<id>",
  displayName: "Eriberto28",
  humanEvalIds: [
    "<id 1>",
    "<id 2>",
  ],
  workspaceId: "<id>",
  filterType: "span_type",
  filterValues: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name of the human review set                                                          |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Detailed description of the human review set                                                  |
| `humanEvalIds`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Array of human review IDs to be applied to matching spans                                     |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional project ID to scope this human review set to a specific project                      |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |
| `filterType`                                                                                  | *"span_type"*                                                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `filterValues`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Array of span types to match                                                                  |