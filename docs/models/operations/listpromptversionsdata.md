# ListPromptVersionsData

## Example Usage

```typescript
import { ListPromptVersionsData } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsData = {
  id: "<id>",
  prompt: {
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    model: "openai/gpt-4o",
  },
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `createdById`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `updatedById`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `description`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | The prompt’s description, meant to be displayable in the UI. Use this field to optionally store a long form explanation of the prompt for your own purpose                                                                     |
| ~~`promptConfig`~~                                                                                                                                                                                                             | [operations.ListPromptVersionsPromptConfig](../../models/operations/listpromptversionspromptconfig.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                             | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>[DEPRECATED] Use the `prompt` property instead. A list of messages compatible with the openAI schema. |
| `prompt`                                                                                                                                                                                                                       | [operations.ListPromptVersionsPromptField](../../models/operations/listpromptversionspromptfield.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | Prompt configuration with model and messages. Use this instead of prompt_config.                                                                                                                                               |
| `metadata`                                                                                                                                                                                                                     | [operations.ListPromptVersionsMetadata](../../models/operations/listpromptversionsmetadata.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `timestamp`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |