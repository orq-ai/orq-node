# Telemetry

Telemetry information for correlating the response with traces

## Example Usage

```typescript
import { Telemetry } from "@orq-ai/node/models/components";

let value: Telemetry = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `traceId`                                           | *string*                                            | :heavy_check_mark:                                  | The root trace ID for the agent execution           |
| `spanId`                                            | *string*                                            | :heavy_check_mark:                                  | The span ID of the agent execution within the trace |