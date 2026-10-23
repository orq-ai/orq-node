# ListManagementKeysResponse

## Example Usage

```typescript
import { ListManagementKeysResponse } from "@orq-ai/node/models/components";

let value: ListManagementKeysResponse = {
  object: "<value>",
  data: [
    {
      managementKeyId: "<id>",
      name: "<value>",
      permissionMode: "MANAGEMENT_PERMISSION_MODE_UNSPECIFIED",
      tokenPrefix: "<value>",
      status: "MANAGEMENT_KEY_STATUS_DISABLED",
      createdAt: new Date("2024-05-03T01:19:06.489Z"),
      updatedAt: new Date("2024-03-03T00:14:00.395Z"),
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Object discriminator for list responses; always `list`.                                                         |
| `data`                                                                                                          | [components.ManagementKey](../../models/components/managementkey.md)[]                                          | :heavy_check_mark:                                                                                              | Page of management-keys, ordered newest first. `token_hash` and<br/> `api_key` are always elided in list responses. |
| `hasMore`                                                                                                       | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | Whether more management-keys are available in the selected pagination<br/> direction.                           |