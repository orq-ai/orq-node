# ExternalConfig

## Example Usage

```typescript
import { ExternalConfig } from "@orq-ai/node/models/operations";

let value: ExternalConfig = {
  name: "<value>",
  apiUrl: "https://vibrant-address.name",
  apiKey: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the external knowledge base.           |
| `apiUrl`                                           | *string*                                           | :heavy_check_mark:                                 | The API URL of the external knowledge base.        |
| `apiKey`                                           | *string*                                           | :heavy_check_mark:                                 | The API key to access the external knowledge base. |