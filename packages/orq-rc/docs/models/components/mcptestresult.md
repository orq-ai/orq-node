# McpTestResult

## Example Usage

```typescript
import { McpTestResult } from "@orq-ai/node/models/components";

let value: McpTestResult = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ok`                                                       | *boolean*                                                  | :heavy_minus_sign:                                         | Whether the probe connected and listed tools successfully. |
| `tools`                                                    | [components.McpTool](../../models/components/mcptool.md)[] | :heavy_minus_sign:                                         | Tools discovered during the probe; not persisted.          |
| `latencyMs`                                                | *number*                                                   | :heavy_minus_sign:                                         | Round trip time of the probe in milliseconds.              |
| `errorMessage`                                             | *string*                                                   | :heavy_minus_sign:                                         | Human-readable reason the probe failed.                    |
| `errors`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | Additional failure details collected during the probe.     |