# ListContactsResponseBody

List of contacts

## Example Usage

```typescript
import { ListContactsResponseBody } from "@orq-ai/node/models/operations";

let value: ListContactsResponseBody = {
  object: "list",
  data: [
    {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      externalId: "user_12345",
      displayName: "Jane Smith",
      email: "jane.smith@example.com",
      avatarUrl: "https://example.com/avatars/jane-smith.jpg",
      tags: [
        "premium",
        "beta-user",
        "enterprise",
      ],
      metadata: {
        "department": "Engineering",
        "role": "Senior Developer",
        "subscription_tier": "premium",
        "last_login": "2024-01-15T10:30:00Z",
      },
      metrics: {
        totalCost: 100,
        totalTokens: 1000,
        totalRequests: 1000,
        errorRate: 22,
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [operations.Data](../../models/operations/data.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |