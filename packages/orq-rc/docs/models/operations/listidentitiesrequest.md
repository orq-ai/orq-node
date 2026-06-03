# ListIdentitiesRequest

## Example Usage

```typescript
import { ListIdentitiesRequest } from "@orq-ai/node/models/operations";

let value: ListIdentitiesRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `startingAfter`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `endingBefore`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `search`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `filterByTags`                                                               | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `includeMetrics`                                                             | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sortBy`                                                                     | [components.IdentitySortField](../../models/components/identitysortfield.md) | :heavy_minus_sign:                                                           | N/A                                                                          |