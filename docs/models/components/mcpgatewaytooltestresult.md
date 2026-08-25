# McpGatewayToolTestResult

## Example Usage

```typescript
import { McpGatewayToolTestResult } from "@orq-ai/node/models/components";

let value: McpGatewayToolTestResult = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `ok`                                                   | *boolean*                                              | :heavy_minus_sign:                                     | Whether the tool call completed successfully.          |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_minus_sign:                                     | Payload returned by the upstream tool.                 |
| `latencyMs`                                            | *number*                                               | :heavy_minus_sign:                                     | Round trip time of the tool call in milliseconds.      |
| `errorMessage`                                         | *string*                                               | :heavy_minus_sign:                                     | Human-readable reason the call failed.                 |
| `errors`                                               | *string*[]                                             | :heavy_minus_sign:                                     | Additional failure details collected during the call.  |