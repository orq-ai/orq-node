# ApiKeyUpdateRequest

## Example Usage

```typescript
import { ApiKeyUpdateRequest } from "@orq-ai/node/models/operations";

let value: ApiKeyUpdateRequest = {
  apiKeyId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiKeyId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier of the API key.                                                        |
| `requestBody`                                                                            | [operations.ApiKeyUpdateRequestBody](../../models/operations/apikeyupdaterequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |