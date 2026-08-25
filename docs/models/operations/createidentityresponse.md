# CreateIdentityResponse

## Example Usage

```typescript
import { CreateIdentityResponse } from "@orq-ai/node/models/operations";

let value: CreateIdentityResponse = {
  headers: {},
  result: {
    identity: {
      id: "<id>",
      externalId: "<id>",
      workspaceId: "<id>",
      created: "<value>",
      updated: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.CreateIdentityResponse](../../models/components/createidentityresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |