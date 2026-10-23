# CreateManagementKeyResponse

## Example Usage

```typescript
import { CreateManagementKeyResponse } from "@orq-ai/node/models/components";

let value: CreateManagementKeyResponse = {
  managementKey: {
    managementKeyId: "<id>",
    name: "<value>",
    permissionMode: "MANAGEMENT_PERMISSION_MODE_READ_ONLY",
    tokenPrefix: "<value>",
    status: "MANAGEMENT_KEY_STATUS_DISABLED",
    createdAt: new Date("2026-03-19T09:20:41.683Z"),
    updatedAt: new Date("2024-01-05T06:52:05.966Z"),
  },
  token: "<value>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `managementKey`                                                                                                             | [components.ManagementKey](../../models/components/managementkey.md)                                                        | :heavy_check_mark:                                                                                                          | Newly minted management-key record.                                                                                         |
| `token`                                                                                                                     | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Raw bearer token in the form `sk-orq-<management_key_id>-<secret>`.<br/> Returned ONCE; the API never exposes this value again. |