# CreateIdentityResponse

## Example Usage

```typescript
import { CreateIdentityResponse } from "@orq-ai/node/models/components";

let value: CreateIdentityResponse = {
  identity: {
    id: "<id>",
    externalId: "<id>",
    workspaceId: "<id>",
    created: "<value>",
    updated: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `identity`                                                 | [components.Identity](../../models/components/identity.md) | :heavy_check_mark:                                         | Newly created identity.                                    |