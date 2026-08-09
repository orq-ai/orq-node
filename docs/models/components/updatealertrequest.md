# UpdateAlertRequest

## Example Usage

```typescript
import { UpdateAlertRequest } from "@orq-ai/node/models/components";

let value: UpdateAlertRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `displayName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | New workspace-unique display name. Omit to keep the current name.      |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | New description. Omit to keep the current description.                 |
| `signal`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | New UI signal preset. Omit to keep the current value.                  |
| `query`                                                                | [components.AlertQuery](../../models/components/alertquery.md)         | :heavy_minus_sign:                                                     | Replacement query. Omit to keep the current query.                     |
| `condition`                                                            | [components.AlertCondition](../../models/components/alertcondition.md) | :heavy_minus_sign:                                                     | Replacement condition. Omit to keep the current condition.             |
| `notifierIds`                                                          | *string*[]                                                             | :heavy_minus_sign:                                                     | Replacement notifier set. Omit to keep the current notifiers.          |
| `enabled`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | New enabled state. Omit to keep the current state.                     |