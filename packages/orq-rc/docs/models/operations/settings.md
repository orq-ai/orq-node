# Settings

## Example Usage

```typescript
import { Settings } from "@orq-ai/node/models/operations";

let value: Settings = {
  tools: [
    {
      id: "01K60ZS4NN4E4N9KMJMF72X9FT",
      key: "<key>",
      displayName: "Julio_Ondricka",
      description: "svelte asset convalesce impolite",
      type: "http",
      http: {
        blueprint: {
          url: "https://weary-sprinkles.net",
          method: "POST",
        },
      },
      requiresApproval: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tools`                                                                                                                                                                                                                                                     | *operations.RunAgentRequestTool*[]                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                          | Tools available to the agent                                                                                                                                                                                                                                |
| `toolApprovalRequired`                                                                                                                                                                                                                                      | [operations.ToolApprovalRequired](../../models/operations/toolapprovalrequired.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                          | If all, the agent will require approval for all tools. If respect_tool, the agent will require approval for tools that have the requires_approval flag set to true. If none, the agent will not require approval for any tools.                             |
| `maxIterations`                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                          | Maximum iterations(llm calls) before the agent will stop executing.                                                                                                                                                                                         |
| `maxExecutionTime`                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                          | Maximum time (in seconds) for the agent thinking process. This does not include the time for tool calls and sub agent calls. It will be loosely enforced, the in progress LLM calls will not be terminated and the last assistant message will be returned. |