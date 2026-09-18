# NotifierUpdateRequest

## Example Usage

```typescript
import { NotifierUpdateRequest } from "@orq-ai/node/models/operations";

let value: NotifierUpdateRequest = {
  notifierId: "<id>",
  updateNotifierRequest: {
    type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `notifierId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updateNotifierRequest`                                                              | [components.UpdateNotifierRequest](../../models/components/updatenotifierrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |