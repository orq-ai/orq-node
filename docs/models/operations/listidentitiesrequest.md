# ListIdentitiesRequest

## Example Usage

```typescript
import { ListIdentitiesRequest } from "@orq-ai/node/models/operations";

let value: ListIdentitiesRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `limit`                                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `startingAfter`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Cursor for forward pagination. Set to the `_id` of the last item from<br/> the previous page. |
| `endingBefore`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | Cursor for backward pagination. Set to the `_id` of the first item from<br/> the previous page. |
| `search`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Case-insensitive search text matched against identity profile fields.                       |
| `filterByTags`                                                                              | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Return only identities that have at least one of these tags.                                |
| `includeMetrics`                                                                            | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Include aggregate usage metrics on each returned identity.                                  |
| `sortBy`                                                                                    | [components.IdentitySortField](../../models/components/identitysortfield.md)                | :heavy_minus_sign:                                                                          | Field used to order the list.                                                               |