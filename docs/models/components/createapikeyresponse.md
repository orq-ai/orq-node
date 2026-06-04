# CreateApiKeyResponse

## Example Usage

```typescript
import { CreateApiKeyResponse } from "@orq-ai/node/models/components";

let value: CreateApiKeyResponse = {
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
  token: "<value>",
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                                                                              | [components.ApiKey](../../models/components/apikey.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                    | Newly minted api-key record.                                                                                                                                          |
| `token`                                                                                                                                                               | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Raw bearer token in the form `sk-orq-<api_key_id>-<secret>`.<br/> Returned ONCE; the API never exposes this value again. Clients<br/> must persist it immediately on receipt. |