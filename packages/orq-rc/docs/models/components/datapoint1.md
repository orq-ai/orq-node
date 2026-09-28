# Datapoint1

A datapoint stores the inputs, messages, and expected output used in dataset evaluations.

## Example Usage

```typescript
import { Datapoint1 } from "@orq-ai/node/models/components";

let value: Datapoint1 = {
  datasetId: "<id>",
  createdById: "<id>",
  updatedById: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `inputs`                                                                    | [components.Inputs](../../models/components/inputs.md)                      | :heavy_minus_sign:                                                          | Structured variables passed to the prompt or workflow.                      |
| `messages`                                                                  | *any*[]                                                                     | :heavy_minus_sign:                                                          | A JSON array containing dynamically typed values.                           |
| `expectedOutput`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | Reference output expected for this datapoint.                               |
| `evaluations`                                                               | *any*[]                                                                     | :heavy_minus_sign:                                                          | A JSON array containing dynamically typed values.                           |
| `datasetId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Dataset that owns the datapoint.                                            |
| `snapshotVersion`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | Dataset snapshot version that includes the datapoint.                       |
| `createdById`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Account that created the datapoint.                                         |
| `updatedById`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Account that last updated the datapoint.                                    |
| `created`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | RFC3339 timestamp when the datapoint was created.                           |
| `updated`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | RFC3339 timestamp when the datapoint was last updated.                      |
| `workspaceId`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Workspace that owns the datapoint, derived from the authentication context. |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | Unique datapoint identifier.                                                |