# RetrieveIdentityRequest

## Example Usage

```typescript
import { RetrieveIdentityRequest } from "@orq-ai/node/models/operations";

let value: RetrieveIdentityRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | Unique identity id or external id                           |
| `includeMetrics`                                            | *boolean*                                                   | :heavy_minus_sign:                                          | Include usage metrics of the last 30 days for the identity. |