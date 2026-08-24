# McpHeaderSecretOutput

## Example Usage

```typescript
import { McpHeaderSecretOutput } from "@orq-ai/node/models/components";

let value: McpHeaderSecretOutput = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `key`                                               | *string*                                            | :heavy_minus_sign:                                  | Header name sent to the upstream server.            |
| `maskedValue`                                       | *string*                                            | :heavy_minus_sign:                                  | Redacted preview of `value`, returned in its place. |