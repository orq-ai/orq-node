# CreateNotifierResponse

## Example Usage

```typescript
import { CreateNotifierResponse } from "@orq-ai/node/models/components";

let value: CreateNotifierResponse = {
  notifier: {
    type: "NOTIFIER_TYPE_EMAIL",
    incomingWebhookUrl: "https://snappy-sonata.info/",
    id: "<id>",
    displayName: "Zelma_Shanahan",
    createdAt: new Date("2025-01-19T05:11:29.747Z"),
    updatedAt: new Date("2024-06-06T05:43:40.337Z"),
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `notifier`                                                                                                     | *components.Notifier*                                                                                          | :heavy_check_mark:                                                                                             | Notifier resource. The destination field present on the resource depends on `type` and is captured in `oneOf`. |