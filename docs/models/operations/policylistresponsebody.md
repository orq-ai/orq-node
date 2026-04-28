# PolicyListResponseBody

Policies retrieved successfully

## Example Usage

```typescript
import { PolicyListResponseBody } from "@orq-ai/node/models/operations";

let value: PolicyListResponseBody = {
  data: [
    {
      id: "<id>",
      createdAt: new Date("2025-10-01T11:10:20.598Z"),
      createdById: "<id>",
      displayName: "Owen80",
      enabled: false,
      projectId: "<id>",
      slug: "<value>",
      timeout: 36435,
      updatedAt: new Date("2026-07-28T16:37:56.348Z"),
      updatedById: "<id>",
    },
  ],
  hasMore: true,
  object: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Policy](../../models/components/policy.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `object`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |