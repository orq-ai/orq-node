# DeploymentStreamChoices

## Example Usage

```typescript
import { DeploymentStreamChoices } from "@orq-ai/node/models/operations";

let value: DeploymentStreamChoices = {
  index: 5993.96,
  message: {
    type: "image",
    role: "user",
    url: "https://hard-to-find-napkin.info",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `index`                              | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `message`                            | *operations.DeploymentStreamMessage* | :heavy_check_mark:                   | N/A                                  |
| `finishReason`                       | *string*                             | :heavy_minus_sign:                   | N/A                                  |