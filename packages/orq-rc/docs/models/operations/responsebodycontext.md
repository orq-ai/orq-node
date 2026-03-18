# ResponseBodyContext

Context information for the trace

## Example Usage

```typescript
import { ResponseBodyContext } from "@orq-ai/node/models/operations";

let value: ResponseBodyContext = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `traceId`                                       | *string*                                        | :heavy_check_mark:                              | Unique identifier for the trace                 |
| `spanId`                                        | *string*                                        | :heavy_check_mark:                              | Unique identifier for the span within the trace |