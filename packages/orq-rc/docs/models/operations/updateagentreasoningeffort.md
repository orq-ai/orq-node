# UpdateAgentReasoningEffort

Constrains effort on reasoning for [reasoning models](https://platform.openai.com/docs/guides/reasoning). Currently supported values are `none`, `minimal`, `low`, `medium`, `high`, and `xhigh`. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

- `gpt-5.1` defaults to `none`, which does not perform reasoning. The supported reasoning values for `gpt-5.1` are `none`, `low`, `medium`, and `high`. Tool calls are supported for all reasoning values in gpt-5.1.
- All models before `gpt-5.1` default to `medium` reasoning effort, and do not support `none`.
- The `gpt-5-pro` model defaults to (and only supports) `high` reasoning effort.
- `xhigh` is currently only supported for `gpt-5.1-codex-max`.

Any of "none", "minimal", "low", "medium", "high", "xhigh".

## Example Usage

```typescript
import { UpdateAgentReasoningEffort } from "@orq-ai/node/models/operations";

let value: UpdateAgentReasoningEffort = "none";
```

## Values

```typescript
"none" | "minimal" | "low" | "medium" | "high" | "xhigh"
```