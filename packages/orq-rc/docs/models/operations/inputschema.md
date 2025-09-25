# InputSchema

The original MCP tool input schema for LLM conversion

## Example Usage

```typescript
import { InputSchema } from "@orq-ai/node/models/operations";

let value: InputSchema = {
  type: "object",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.CreateToolRequestBodyToolsRequest4McpType](../../models/operations/createtoolrequestbodytoolsrequest4mcptype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `properties`                                                                                                                 | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `required`                                                                                                                   | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |