# ClassifyNoulAnswer

## Example Usage

```typescript
import { ClassifyNoulAnswer } from "@orq-ai/node/models/components";

let value: ClassifyNoulAnswer = {
  noul: 7389.16,
  type: "noul",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `noul`                                                                          | *number*                                                                        | :heavy_check_mark:                                                              | Probability between 0 and 1 that the statement holds. Present for noul answers. |
| `type`                                                                          | *"noul"*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |