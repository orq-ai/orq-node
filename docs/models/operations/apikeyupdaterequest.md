# ApiKeyUpdateRequest

## Example Usage

```typescript
import { ApiKeyUpdateRequest } from "@orq-ai/node/models/operations";

let value: ApiKeyUpdateRequest = {
  apiKeyId: "<id>",
  updateApiKeyRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `apiKeyId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | API key id to update.                                                            |
| `updateApiKeyRequest`                                                            | [components.UpdateApiKeyRequest](../../models/components/updateapikeyrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |