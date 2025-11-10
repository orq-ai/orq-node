# AgentToolInputRunBlueprint

The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields.

## Example Usage

```typescript
import { AgentToolInputRunBlueprint } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunBlueprint = {
  url: "https://well-made-filter.com/",
  method: "POST",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The URL to send the request to.                                                                            |
| `method`                                                                                                   | [operations.AgentToolInputRunMethod](../../models/operations/agenttoolinputrunmethod.md)                   | :heavy_check_mark:                                                                                         | The HTTP method to use.                                                                                    |
| `headers`                                                                                                  | Record<string, [operations.AgentToolInputRunHeaders](../../models/operations/agenttoolinputrunheaders.md)> | :heavy_minus_sign:                                                                                         | The headers to send with the request.                                                                      |
| `body`                                                                                                     | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | The body to send with the request.                                                                         |