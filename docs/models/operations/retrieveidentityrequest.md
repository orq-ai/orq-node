# RetrieveIdentityRequest

## Example Usage

```typescript
import { RetrieveIdentityRequest } from "@orq-ai/node/models/operations";

let value: RetrieveIdentityRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | Identity ID to retrieve.                                  |
| `includeMetrics`                                          | *boolean*                                                 | :heavy_minus_sign:                                        | Include aggregate usage metrics on the returned identity. |