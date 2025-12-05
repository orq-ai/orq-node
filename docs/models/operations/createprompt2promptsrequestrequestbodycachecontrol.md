# CreatePrompt2PromptsRequestRequestBodyCacheControl

## Example Usage

```typescript
import { CreatePrompt2PromptsRequestRequestBodyCacheControl } from "@orq-ai/node/models/operations";

let value: CreatePrompt2PromptsRequestRequestBodyCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.CreatePrompt2PromptsRequestRequestBodyPromptMessages4ContentType](../../models/operations/createprompt2promptsrequestrequestbodypromptmessages4contenttype.md)                    | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.CreatePrompt2PromptsRequestRequestBodyTtl](../../models/operations/createprompt2promptsrequestrequestbodyttl.md)                                                                  | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |