# PromptTaskConfig

## Example Usage

```typescript
import { PromptTaskConfig } from "@orq-ai/node/models/components";

let value: PromptTaskConfig = {
  promptConfig: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promptConfig`                                                         | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `messagesSource`                                                       | [components.MessagesSource](../../models/components/messagessource.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `engine`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `tools`                                                                | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `knowledgeBases`                                                       | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Null when the column was saved without metadata.                       |
| `entityConfiguration`                                                  | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Null when the column was saved without an entity configuration.        |