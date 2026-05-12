# SkillListRequest

## Example Usage

```typescript
import { SkillListRequest } from "@orq-ai/node/models/operations";

let value: SkillListRequest = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Page size, 1–200. Unset uses the server default (25); explicit 0<br/> (or anything outside the range) is rejected by buf.validate. |
| `startingAfter`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `endingBefore`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |