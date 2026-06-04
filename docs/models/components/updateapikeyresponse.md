# UpdateApiKeyResponse

## Example Usage

```typescript
import { UpdateApiKeyResponse } from "@orq-ai/node/models/components";

let value: UpdateApiKeyResponse = {
  apiKey: {
    apiKeyId: "<id>",
    name: "<value>",
    owner: {},
    projectScope: {},
    permissionMode: "PERMISSION_MODE_RESTRICTED",
    tokenPrefix: "<value>",
    status: "API_KEY_STATUS_REVOKED",
    createdAt: new Date("2025-11-02T12:52:15.855Z"),
    updatedAt: new Date("2026-06-27T00:44:47.417Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `apiKey`                                               | [components.ApiKey](../../models/components/apikey.md) | :heavy_check_mark:                                     | Updated api-key.                                       |