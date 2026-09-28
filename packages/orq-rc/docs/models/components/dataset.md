# Dataset

A dataset groups datapoints used for evaluation and optimization workflows.

## Example Usage

```typescript
import { Dataset } from "@orq-ai/node/models/components";

let value: Dataset = {
  displayName: "Peyton.Rogahn7",
  projectId: "<id>",
  metadata: {
    totalVersions: 372877,
    datapointsCount: 148260,
  },
  createdById: "<id>",
  updatedById: "<id>",
  created: "<value>",
  updated: "<value>",
  workspaceId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `displayName`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Human-readable dataset name.                                              |
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Project that owns the dataset.                                            |
| `metadata`                                                                | [components.DatasetMetadata](../../models/components/datasetmetadata.md)  | :heavy_check_mark:                                                        | Dataset counters maintained by the API.                                   |
| `createdById`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Account that created the dataset.                                         |
| `updatedById`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Account that last updated the dataset.                                    |
| `created`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | RFC3339 timestamp when the dataset was created.                           |
| `updated`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | RFC3339 timestamp when the dataset was last updated.                      |
| `workspaceId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Workspace that owns the dataset, derived from the authentication context. |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Unique dataset identifier.                                                |