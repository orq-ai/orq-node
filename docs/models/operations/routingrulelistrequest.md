# RoutingRuleListRequest

## Example Usage

```typescript
import { RoutingRuleListRequest } from "@orq-ai/node/models/operations";

let value: RoutingRuleListRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `startingAfter`                                            | *string*                                                   | :heavy_minus_sign:                                         | A cursor for use in pagination.                            |
| `endingBefore`                                             | *string*                                                   | :heavy_minus_sign:                                         | A cursor for use in pagination.                            |
| `projectId`                                                | *string*                                                   | :heavy_minus_sign:                                         | Optional filter by project ID.                             |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Optional search term matched against name and description. |
| `enabled`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | Filter by enabled status.                                  |
| `model`                                                    | *string*[]                                                 | :heavy_minus_sign:                                         | Filter by referenced model refs (comma-separated).         |