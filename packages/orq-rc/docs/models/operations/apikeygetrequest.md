# ApiKeyGetRequest

## Example Usage

```typescript
import { ApiKeyGetRequest } from "@orq-ai/node/models/operations";

let value: ApiKeyGetRequest = {
  apiKeyId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apiKeyId`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | API key id to retrieve (e.g. `01H...`).                                                                     |
| `includeBudget`                                                                                             | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | When true, embed the api-key-scoped budget (config and limits only,<br/> no live usage) on the returned record. |