# RequestBodyExternalConfig

Configuration for the external knowledge base.

## Example Usage

```typescript
import { RequestBodyExternalConfig } from "@orq-ai/node/models/operations";

let value: RequestBodyExternalConfig = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *string*                                     | :heavy_minus_sign:                           | The name of the external knowledge base.     |
| `apiUrl`                                     | *string*                                     | :heavy_minus_sign:                           | The API URL for the external knowledge base. |
| `apiKey`                                     | *string*                                     | :heavy_minus_sign:                           | The API key for the external knowledge base. |