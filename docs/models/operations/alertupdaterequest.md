# AlertUpdateRequest

## Example Usage

```typescript
import { AlertUpdateRequest } from "@orq-ai/node/models/operations";

let value: AlertUpdateRequest = {
  alertId: "<id>",
  updateAlertRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `alertId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Alert ID to update.                                                            |
| `updateAlertRequest`                                                           | [components.UpdateAlertRequest](../../models/components/updatealertrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |