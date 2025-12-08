# UpdatePrompt2PromptsCacheControl

## Example Usage

```typescript
import { UpdatePrompt2PromptsCacheControl } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessages2Type](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessages2type.md)                                  | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.UpdatePrompt2PromptsTtl](../../models/operations/updateprompt2promptsttl.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |