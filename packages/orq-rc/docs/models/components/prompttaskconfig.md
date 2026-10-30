# PromptTaskConfig

## Example Usage

```typescript
import { PromptTaskConfig } from "@orq-ai/node/models/components";

let value: PromptTaskConfig = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `promptConfig`                                                                             | [components.PromptConfig](../../models/components/promptconfig.md)                         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `messagesSource`                                                                           | [components.MessagesSource](../../models/components/messagessource.md)                     | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `engine`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `tools`                                                                                    | [components.Tools](../../models/components/tools.md)[]                                     | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `knowledgeBases`                                                                           | [components.KnowledgeBases](../../models/components/knowledgebases.md)[]                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [components.PromptTaskConfigMetadata](../../models/components/prompttaskconfigmetadata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `entityConfiguration`                                                                      | [components.EntityConfiguration](../../models/components/entityconfiguration.md)           | :heavy_minus_sign:                                                                         | N/A                                                                                        |