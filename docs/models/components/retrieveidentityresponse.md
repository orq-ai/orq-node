# RetrieveIdentityResponse

## Example Usage

```typescript
import { RetrieveIdentityResponse } from "@orq-ai/node/models/components";

let value: RetrieveIdentityResponse = {
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
| `identity`                                                 | [components.Identity](../../models/components/identity.md) | :heavy_check_mark:                                         | Requested identity.                                        |