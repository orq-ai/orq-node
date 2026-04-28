# RequestLimit

## Example Usage

```typescript
import { RequestLimit } from "@orq-ai/node/models/components";

let value: RequestLimit = {
  amount: 503283,
  period: "month",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `period`                                                                       | [components.RequestLimitPeriod](../../models/components/requestlimitperiod.md) | :heavy_check_mark:                                                             | N/A                                                                            |