# SyncResult

## Example Usage

```typescript
import { SyncResult } from "@orq-ai/node/models/operations";

let value: SyncResult = {
  toolsTotal: 1389.12,
  toolsAdded: 7839.62,
  toolsRemoved: 1210.89,
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