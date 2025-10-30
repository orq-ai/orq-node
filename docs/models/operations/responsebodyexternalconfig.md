# ResponseBodyExternalConfig

## Example Usage

```typescript
import { ResponseBodyExternalConfig } from "@orq-ai/node/models/operations";

let value: ResponseBodyExternalConfig = {
  name: "<value>",
  apiUrl: "https://needy-secrecy.net/",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The name of the external knowledge base.    |
| `apiUrl`                                    | *string*                                    | :heavy_check_mark:                          | The API URL of the external knowledge base. |