# UpdatePrompt2PromptsRequestCacheControl

## Example Usage

```typescript
import { UpdatePrompt2PromptsRequestCacheControl } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsRequestCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessages3ContentType](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessages3contenttype.md)                    | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.UpdatePrompt2PromptsRequestTtl](../../models/operations/updateprompt2promptsrequestttl.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |