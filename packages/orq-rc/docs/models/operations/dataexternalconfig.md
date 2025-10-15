# DataExternalConfig

## Example Usage

```typescript
import { DataExternalConfig } from "@orq-ai/node/models/operations";

let value: DataExternalConfig = {
  name: "<value>",
  apiUrl: "https://finished-grouper.net",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The name of the external knowledge base.    |
| `apiUrl`                                    | *string*                                    | :heavy_check_mark:                          | The API URL of the external knowledge base. |