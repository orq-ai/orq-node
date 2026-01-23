# CreateResponseData

One server-sent event emitted while the response streams

## Example Usage

```typescript
import { CreateResponseData } from "@orq-ai/node/models/operations";

let value: CreateResponseData = {
  type: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `type`                      | *string*                    | :heavy_check_mark:          | The type of streaming event |
| `additionalProperties`      | Record<string, *any*>       | :heavy_minus_sign:          | N/A                         |