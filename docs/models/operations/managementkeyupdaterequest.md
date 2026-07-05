# ManagementKeyUpdateRequest

## Example Usage

```typescript
import { ManagementKeyUpdateRequest } from "@orq-ai/node/models/operations";

let value: ManagementKeyUpdateRequest = {
  managementKeyId: "<id>",
  updateManagementKeyRequest: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `managementKeyId`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | Management key id to update.                                                                   |
| `updateManagementKeyRequest`                                                                   | [components.UpdateManagementKeyRequest](../../models/components/updatemanagementkeyrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |