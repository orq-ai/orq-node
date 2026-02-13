# AgentToolInputCRUDProviderBuiltInTool

Provider-specific built-in tools that are passed through to the provider. Must be prefixed with the provider name (e.g., openai:web_search, anthropic:web_search_20250305, google:google_search).

## Example Usage

```typescript
import { AgentToolInputCRUDProviderBuiltInTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDProviderBuiltInTool = {
  type: "openai:web_search",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | Provider-prefixed tool type                          |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |