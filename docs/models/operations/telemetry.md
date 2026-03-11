# Telemetry

## Example Usage

```typescript
import { Telemetry } from "@orq-ai/node/models/operations";

let value: Telemetry = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `traceId`                                                 | *string*                                                  | :heavy_check_mark:                                        | The trace id for the request that generated this response |
| `spanId`                                                  | *string*                                                  | :heavy_check_mark:                                        | The span id for the request that generated this response  |