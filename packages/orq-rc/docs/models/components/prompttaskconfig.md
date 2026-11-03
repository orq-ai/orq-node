# PromptTaskConfig

## Example Usage

```typescript
import { PromptTaskConfig } from "@orq-ai/node/models/components";

let value: PromptTaskConfig = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promptConfig`                                                         | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `messagesSource`                                                       | [components.MessagesSource](../../models/components/messagessource.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `engine`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `tools`                                                                | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `knowledgeBases`                                                       | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `entityConfiguration`                                                  | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |