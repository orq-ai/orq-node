# TracesListSpansRequest

## Example Usage

```typescript
import { TracesListSpansRequest } from "@orq-ai/node/models/operations";

let value: TracesListSpansRequest = {
  traceId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `traceId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pageToken`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `allAccessibleProjects`                                              | *boolean*                                                            | :heavy_minus_sign:                                                   | Spans every project the caller belongs to instead of the active one. |