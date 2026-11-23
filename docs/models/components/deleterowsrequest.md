# DeleteRowsRequest

## Example Usage

```typescript
import { DeleteRowsRequest } from "@orq-ai/node/models/components";

let value: DeleteRowsRequest = {
  rowIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `rowIds`                                                                           | *string*[]                                                                         | :heavy_check_mark:                                                                 | Rows to delete, at least one. Unknown IDs are ignored as long as one row<br/> matches. |