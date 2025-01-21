# DataData

## Example Usage

```typescript
import { DataData } from "@orq-ai/node/models/operations";

let value: DataData = {
  remoteConfigId: "43d7204f-0e0a-4573-b54b-d6d0c8d36bd7",
  remoteConfigKey: "<value>",
  remoteConfigType: "<value>",
  remoteConfigVersion: 5483.19,
  remoteConfigVariantId: "fe6fc8fb-314b-486c-80db-2600f753cb0c",
  remoteConfigVariantPosition: 9486.33,
  isDefaultMatched: false,
  action: "get_config",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `remoteConfigId`                                       | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigKey`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigType`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVersion`                                  | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVariantId`                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVariantPosition`                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigValue`                                    | *any*                                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `isDefaultMatched`                                     | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `action`                                               | [operations.Action](../../models/operations/action.md) | :heavy_check_mark:                                     | N/A                                                    |