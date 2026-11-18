# McpServerHealth

## Example Usage

```typescript
import { McpServerHealth } from "@orq-ai/node/models/components";

let value: McpServerHealth = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `status`                                                                             | [components.McpHealthStatus](../../models/components/mcphealthstatus.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `coverage`                                                                           | [components.McpHealthCoverage](../../models/components/mcphealthcoverage.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `lastCheckedAt`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `lastHealthyAt`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `latencyMs`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `consecutiveFailures`                                                                | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `errorMessage`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `recentChecks`                                                                       | [components.McpHealthCheckResult](../../models/components/mcphealthcheckresult.md)[] | :heavy_minus_sign:                                                                   | Oldest first.                                                                        |