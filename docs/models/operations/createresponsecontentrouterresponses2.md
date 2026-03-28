# CreateResponseContentRouterResponses2

A refusal content part from the model

## Example Usage

```typescript
import { CreateResponseContentRouterResponses2 } from "@orq-ai/node/models/operations";

let value: CreateResponseContentRouterResponses2 = {
  type: "refusal",
  refusal: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *"refusal"*              | :heavy_check_mark:       | The type of content part |
| `refusal`                | *string*                 | :heavy_check_mark:       | The refusal message      |