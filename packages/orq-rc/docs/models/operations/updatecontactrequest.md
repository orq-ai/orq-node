# UpdateContactRequest

## Example Usage

```typescript
import { UpdateContactRequest } from "@orq-ai/node/models/operations";

let value: UpdateContactRequest = {
  id: "<id>",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique contact id or external id                                                           |
| `requestBody`                                                                              | [operations.UpdateContactRequestBody](../../models/operations/updatecontactrequestbody.md) | :heavy_minus_sign:                                                                         | Contact fields to update                                                                   |