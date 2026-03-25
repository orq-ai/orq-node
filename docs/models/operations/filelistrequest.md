# FileListRequest

## Example Usage

```typescript
import { FileListRequest } from "@orq-ai/node/models/operations";

let value: FileListRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `limit`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `startingAfter`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | A cursor for use in pagination. Defines your place in the list for the next page.     |
| `endingBefore`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | A cursor for use in pagination. Defines your place in the list for the previous page. |