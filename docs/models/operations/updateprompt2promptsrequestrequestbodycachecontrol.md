# UpdatePrompt2PromptsRequestRequestBodyCacheControl

## Example Usage

```typescript
import { UpdatePrompt2PromptsRequestRequestBodyCacheControl } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsRequestRequestBodyCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessages4ContentType](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessages4contenttype.md)                    | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.UpdatePrompt2PromptsRequestRequestBodyTtl](../../models/operations/updateprompt2promptsrequestrequestbodyttl.md)                                                                  | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |