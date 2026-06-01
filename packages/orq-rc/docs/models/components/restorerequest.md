# RestoreRequest

## Example Usage

```typescript
import { RestoreRequest } from "@orq-ai/node/models/components";

let value: RestoreRequest = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `redactedText`                                      | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `mappings`                                          | Record<string, *string*>                            | :heavy_minus_sign:                                  | Placeholder-to-original mapping produced by Redact. |