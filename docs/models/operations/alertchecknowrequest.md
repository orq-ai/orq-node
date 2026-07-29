# AlertCheckNowRequest

## Example Usage

```typescript
import { AlertCheckNowRequest } from "@orq-ai/node/models/operations";

let value: AlertCheckNowRequest = {
  alertId: "<id>",
  checkAlertNowRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `alertId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Alert to evaluate now.                                                             |
| `checkAlertNowRequest`                                                             | [components.CheckAlertNowRequest](../../models/components/checkalertnowrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |