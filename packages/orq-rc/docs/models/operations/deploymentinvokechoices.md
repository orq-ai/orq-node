# DeploymentInvokeChoices

## Example Usage

```typescript
import { DeploymentInvokeChoices } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeChoices = {
  index: 534.27,
  message: {
    type: "image",
    role: "system",
    url: "https://crafty-bin.com",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `index`              | *number*             | :heavy_check_mark:   | N/A                  |
| `message`            | *operations.Message* | :heavy_check_mark:   | N/A                  |
| `finishReason`       | *string*             | :heavy_minus_sign:   | N/A                  |