# SortingProps

## Example Usage

```typescript
import { SortingProps } from "@orq-ai/node/models/operations";

let value: SortingProps = {
  key: "<key>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `key`                                                        | *string*                                                     | :heavy_check_mark:                                           | The path to sort by                                          |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_minus_sign:                                           | The direction to sort by                                     |