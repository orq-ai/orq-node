# McpHeaderSecret

## Example Usage

```typescript
import { McpHeaderSecret } from "@orq-ai/node/models/components";

let value: McpHeaderSecret = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `key`                                               | *string*                                            | :heavy_minus_sign:                                  | Header name sent to the upstream server.            |
| `value`                                             | *string*                                            | :heavy_minus_sign:                                  | Header value; accepted on write and never returned. |
| `maskedValue`                                       | *string*                                            | :heavy_minus_sign:                                  | Redacted preview of `value`, returned in its place. |