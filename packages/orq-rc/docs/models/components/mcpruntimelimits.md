# McpRuntimeLimits

## Example Usage

```typescript
import { McpRuntimeLimits } from "@orq-ai/node/models/components";

let value: McpRuntimeLimits = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `requestTimeoutMs`            | *number*                      | :heavy_minus_sign:            | N/A                           |
| `toolTimeoutMs`               | *number*                      | :heavy_minus_sign:            | N/A                           |
| `maxRequestBytes`             | *number*                      | :heavy_minus_sign:            | N/A                           |
| `maxResponseBytes`            | *number*                      | :heavy_minus_sign:            | N/A                           |
| `maxToolsPerGateway`          | *number*                      | :heavy_minus_sign:            | N/A                           |
| `perTokenRequestsPerMinute`   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `perGatewayRequestsPerMinute` | *number*                      | :heavy_minus_sign:            | N/A                           |