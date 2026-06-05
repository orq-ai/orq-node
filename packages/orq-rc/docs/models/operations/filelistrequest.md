# FileListRequest

## Example Usage

```typescript
import { FileListRequest } from "@orq-ai/node/models/operations";

let value: FileListRequest = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page size. Unset uses the server default.                                                       |
| `startingAfter`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | Cursor for forward pagination. Set to the `file_id` of the last item<br/> from the previous page. |
| `endingBefore`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | Cursor for backward pagination. Set to the `file_id` of the first item<br/> from the previous page. |
| `projectId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |