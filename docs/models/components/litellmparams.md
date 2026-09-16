# LiteLLMParams

## Example Usage

```typescript
import { LiteLLMParams } from "@orq-ai/node/models/components";

let value: LiteLLMParams = {
  mergeReasoningContentInChoices: false,
  model: "openai/gpt-5.6-sol",
  useInPassThrough: false,
  useLitellmProxy: false,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `mergeReasoningContentInChoices` | *boolean*                        | :heavy_check_mark:               | N/A                              |                                  |
| `model`                          | *string*                         | :heavy_check_mark:               | N/A                              | openai/gpt-5.6-sol               |
| `useInPassThrough`               | *boolean*                        | :heavy_check_mark:               | N/A                              |                                  |
| `useLitellmProxy`                | *boolean*                        | :heavy_check_mark:               | N/A                              |                                  |