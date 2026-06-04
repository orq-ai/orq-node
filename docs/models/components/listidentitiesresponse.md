# ListIdentitiesResponse

## Example Usage

```typescript
import { ListIdentitiesResponse } from "@orq-ai/node/models/components";

let value: ListIdentitiesResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      workspaceId: "<id>",
      created: "<value>",
      updated: "<value>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Object discriminator for list responses; always `list`.                      |
| `data`                                                                       | [components.Identity](../../models/components/identity.md)[]                 | :heavy_check_mark:                                                           | Page of identities.                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether more identities are available in the selected pagination<br/> direction. |