# LitellmParams

## Example Usage

```typescript
import { LitellmParams } from "@orq-ai/node/models/operations";

let value: LitellmParams = {
  useInPassThrough: false,
  useLitellmProxy: true,
  mergeReasoningContentInChoices: false,
  model: "Accord",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `useInPassThrough`               | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `useLitellmProxy`                | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `mergeReasoningContentInChoices` | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `model`                          | *string*                         | :heavy_check_mark:               | N/A                              |