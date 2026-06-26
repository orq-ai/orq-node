# GetManagementKeyResponse

## Example Usage

```typescript
import { GetManagementKeyResponse } from "@orq-ai/node/models/components";

let value: GetManagementKeyResponse = {
  managementKey: {
    managementKeyId: "<id>",
    name: "<value>",
    permissionMode: "MANAGEMENT_PERMISSION_MODE_READ_ONLY",
    tokenPrefix: "<value>",
    status: "MANAGEMENT_KEY_STATUS_DISABLED",
    createdAt: new Date("2026-03-19T09:20:41.683Z"),
    updatedAt: new Date("2024-01-05T06:52:05.966Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `managementKey`                                                      | [components.ManagementKey](../../models/components/managementkey.md) | :heavy_check_mark:                                                   | Requested management-key. Raw token never included.                  |