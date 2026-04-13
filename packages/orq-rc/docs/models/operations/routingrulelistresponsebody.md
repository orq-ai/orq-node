# RoutingRuleListResponseBody

Routing rules retrieved successfully

## Example Usage

```typescript
import { RoutingRuleListResponseBody } from "@orq-ai/node/models/operations";

let value: RoutingRuleListResponseBody = {
  data: [
    {
      id: "<id>",
      createdAt: new Date("2025-03-06T11:27:21.430Z"),
      createdById: "<id>",
      displayName: "Margie.Cormier",
      enabled: false,
      priority: 492173,
      projectId: "<id>",
      updatedAt: new Date("2025-08-06T10:07:20.007Z"),
      updatedById: "<id>",
    },
  ],
  hasMore: false,
  object: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [components.RoutingRuleDocument](../../models/components/routingruledocument.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `object`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |