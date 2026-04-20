# AllowedTools

Filter which tools from the MCP server are exposed.

## Example Usage

```typescript
import { AllowedTools } from "@orq-ai/node/models/operations";

let value: AllowedTools = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `readOnly`                                      | *boolean*                                       | :heavy_minus_sign:                              | Only expose tools with readOnlyHint annotation. |
| `toolNames`                                     | *string*[]                                      | :heavy_minus_sign:                              | List of allowed tool names.                     |