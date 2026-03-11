# DeploymentStreamTelemetry

## Example Usage

```typescript
import { DeploymentStreamTelemetry } from "@orq-ai/node/models/operations";

let value: DeploymentStreamTelemetry = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `traceId`                                                 | *string*                                                  | :heavy_check_mark:                                        | The trace id for the request that generated this response |
| `spanId`                                                  | *string*                                                  | :heavy_check_mark:                                        | The span id for the request that generated this response  |