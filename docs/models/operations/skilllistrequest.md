# SkillListRequest

## Example Usage

```typescript
import { SkillListRequest } from "@orq-ai/node/models/operations";

let value: SkillListRequest = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Page size, 1–200. Unset uses the server default (25). Values outside<br/> the range, including 0, are rejected. |
| `startingAfter`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Cursor for forward pagination. Set to the `skill_id` of the last<br/> item from the previous page.          |
| `endingBefore`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Cursor for backward pagination. Set to the `skill_id` of the first<br/> item from the previous page.        |