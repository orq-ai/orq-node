# GuardrailRuleListRequest

## Example Usage

```typescript
import { GuardrailRuleListRequest } from "@orq-ai/node/models/operations";

let value: GuardrailRuleListRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `startingAfter`                                           | *string*                                                  | :heavy_minus_sign:                                        | A cursor for use in pagination.                           |
| `endingBefore`                                            | *string*                                                  | :heavy_minus_sign:                                        | A cursor for use in pagination.                           |
| `projectId`                                               | *string*                                                  | :heavy_minus_sign:                                        | Optional filter by project ID.                            |
| `search`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Filter by display name or description (case-insensitive). |
| `sortBy`                                                  | [operations.SortBy](../../models/operations/sortby.md)    | :heavy_minus_sign:                                        | Field to sort by. Defaults to created_at (newest first).  |
| `enabled`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | Filter by enabled status.                                 |
| `guardrailId`                                             | *string*[]                                                | :heavy_minus_sign:                                        | Filter by referenced guardrail ids (comma-separated).     |