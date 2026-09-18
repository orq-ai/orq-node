# McpHeaderSecret

## Example Usage

```typescript
import { McpHeaderSecret } from "@orq-ai/node/models/components";

let value: McpHeaderSecret = {
  key: "Authorization",
  value: "ghp_xxxxxxxxxxxx",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `key`                                               | *string*                                            | :heavy_minus_sign:                                  | Header name sent to the upstream server.            | Authorization                                       |
| `value`                                             | *string*                                            | :heavy_minus_sign:                                  | Header value; accepted on write and never returned. | ghp_xxxxxxxxxxxx                                    |
| `maskedValue`                                       | *string*                                            | :heavy_minus_sign:                                  | Redacted preview of `value`, returned in its place. |                                                     |