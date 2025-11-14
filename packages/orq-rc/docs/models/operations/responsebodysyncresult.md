# ResponseBodySyncResult

## Example Usage

```typescript
import { ResponseBodySyncResult } from "@orq-ai/node/models/operations";

let value: ResponseBodySyncResult = {
  toolsTotal: 3501.61,
  toolsAdded: 9865.44,
  toolsRemoved: 545.79,
  errors: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `toolsTotal`       | *number*           | :heavy_check_mark: | N/A                |
| `toolsAdded`       | *number*           | :heavy_check_mark: | N/A                |
| `toolsRemoved`     | *number*           | :heavy_check_mark: | N/A                |
| `errors`           | *string*[]         | :heavy_check_mark: | N/A                |