# AutoModelPool

## Example Usage

```typescript
import { AutoModelPool } from "@orq-ai/node/models/components";

let value: AutoModelPool = {
  models: [
    {
      inputCost: 5796.8,
      intelligenceIndex: 3405.46,
      model: "Countach",
      outputCost: 1093.72,
    },
  ],
  poolStatus: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `intelligenceIndex`                                                            | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `models`                                                                       | [components.AutoModelPoolSeat](../../models/components/automodelpoolseat.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `poolStatus`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `selectedModel`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |