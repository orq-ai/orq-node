# ProviderToolInput

Provider-specific built-in tools that are passed through to the provider. Must be prefixed with the provider name (e.g., openai:web_search, anthropic:web_search_20250305, google:google_search).

## Example Usage

```typescript
import { ProviderToolInput } from "@orq-ai/node/models/components";

let value: ProviderToolInput = {
  type: "openai:web_search",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Provider-prefixed tool type                                                                                                  |
| `key`                                                                                                                        | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The key of a pre-created tool                                                                                                |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The ID of a pre-created tool                                                                                                 |
| `timeout`                                                                                                                    | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Tool execution timeout in seconds for this agent (max: 10 minutes). Overrides the timeout configured on the tool definition. |
| `requiresApproval`                                                                                                           | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether this tool requires approval before execution                                                                         |
| `configuration`                                                                                                              | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time.                          |