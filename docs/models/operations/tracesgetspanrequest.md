# TracesGetSpanRequest

## Example Usage

```typescript
import { TracesGetSpanRequest } from "@orq-ai/node/models/operations";

let value: TracesGetSpanRequest = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `traceId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Optional: queue items predating trace_id capture only have the span. |
| `spanId`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |