# PostV2AgentsA2aResponseBody

A2A agent registered successfully

## Example Usage

```typescript
import { PostV2AgentsA2aResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2AgentsA2aResponseBody = {
  id: "<id>",
  type: "a2a",
  key: "<key>",
  displayName: "Billy.Bayer",
  description:
    "pfft forearm anti doorpost casement ultimately via baritone forearm",
  workspaceId: "<id>",
  projectId: "<id>",
  status: "<value>",
  path: "/dev",
  metrics: {
    totalCost: 9663.27,
  },
  memoryStores: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  teamOfAgents: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [operations.PostV2AgentsA2aType](../../models/operations/postv2agentsa2atype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `displayName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdById`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `updatedById`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `role`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `instructions`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `status`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `versionHash`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `path`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `metrics`                                                                        | [operations.Metrics](../../models/operations/metrics.md)                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `memoryStores`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamOfAgents`                                                                   | *any*[]                                                                          | :heavy_check_mark:                                                               | N/A                                                                              |
| `created`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `updated`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `a2a`                                                                            | [operations.A2a](../../models/operations/a2a.md)                                 | :heavy_minus_sign:                                                               | N/A                                                                              |