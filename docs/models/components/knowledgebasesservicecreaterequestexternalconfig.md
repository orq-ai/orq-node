# KnowledgeBasesServiceCreateRequestExternalConfig

## Example Usage

```typescript
import { KnowledgeBasesServiceCreateRequestExternalConfig } from "@orq-ai/node/models/components";

let value: KnowledgeBasesServiceCreateRequestExternalConfig = {
  name: "<value>",
  apiUrl: "https://wicked-venom.net",
  apiKey: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the external knowledge base.           |
| `apiUrl`                                           | *string*                                           | :heavy_check_mark:                                 | The API URL of the external knowledge base.        |
| `apiKey`                                           | *string*                                           | :heavy_check_mark:                                 | The API key to access the external knowledge base. |