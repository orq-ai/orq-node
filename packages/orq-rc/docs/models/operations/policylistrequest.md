# PolicyListRequest

## Example Usage

```typescript
import { PolicyListRequest } from "@orq-ai/node/models/operations";

let value: PolicyListRequest = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `limit`                         | *number*                        | :heavy_minus_sign:              | N/A                             |
| `startingAfter`                 | *string*                        | :heavy_minus_sign:              | A cursor for use in pagination. |
| `endingBefore`                  | *string*                        | :heavy_minus_sign:              | A cursor for use in pagination. |
| `projectId`                     | *string*                        | :heavy_minus_sign:              | Optional filter by project ID.  |