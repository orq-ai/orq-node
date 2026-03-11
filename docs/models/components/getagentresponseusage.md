# GetAgentResponseUsage

Token usage from the agent execution

## Example Usage

```typescript
import { GetAgentResponseUsage } from "@orq-ai/node/models/components";

let value: GetAgentResponseUsage = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `completionTokens`                                                                                                       | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Number of tokens in the generated completion.                                                                            |
| `promptTokens`                                                                                                           | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Number of tokens in the prompt.                                                                                          |
| `totalTokens`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Total number of tokens used in the request (prompt + completion).                                                        |
| `promptTokensDetails`                                                                                                    | [components.GetAgentResponsePromptTokensDetails](../../models/components/getagentresponseprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `completionTokensDetails`                                                                                                | [components.GetAgentResponseCompletionTokensDetails](../../models/components/getagentresponsecompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |