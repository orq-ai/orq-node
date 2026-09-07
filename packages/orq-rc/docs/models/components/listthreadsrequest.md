# ListThreadsRequest

## Example Usage

```typescript
import { ListThreadsRequest } from "@orq-ai/node/models/components";

let value: ListThreadsRequest = {
  filters: {
    interval: "SESSION_INTERVAL_LAST_3_MONTHS",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `filters`                                                            | [components.ThreadFilters](../../models/components/threadfilters.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |