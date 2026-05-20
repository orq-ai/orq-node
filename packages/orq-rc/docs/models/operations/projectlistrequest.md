# ProjectListRequest

## Example Usage

```typescript
import { ProjectListRequest } from "@orq-ai/node/models/operations";

let value: ProjectListRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Page size, 1-200. Unset uses the server default.                                                   |
| `startingAfter`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Cursor for forward pagination. Set to the `project_id` of the last<br/> item from the previous page. |
| `endingBefore`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Cursor for backward pagination. Set to the `project_id` of the first<br/> item from the previous page. |