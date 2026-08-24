# McpToolAnnotations

Hints claimed by the upstream server; the gateway does not enforce them.

## Example Usage

```typescript
import { McpToolAnnotations } from "@orq-ai/node/models/components";

let value: McpToolAnnotations = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `readOnly`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | Upstream claims the tool does not modify state.                              |
| `destructive`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | Upstream claims the tool can perform destructive updates.                    |
| `idempotent`                                                                 | *boolean*                                                                    | :heavy_minus_sign:                                                           | Upstream claims repeated calls with the same arguments have no extra effect. |
| `openWorld`                                                                  | *boolean*                                                                    | :heavy_minus_sign:                                                           | Upstream claims the tool reaches systems outside its own domain.             |