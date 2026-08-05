# IncompleteDetails

Details about why the response is incomplete

## Example Usage

```typescript
import { IncompleteDetails } from "@orq-ai/node/models/operations";

let value: IncompleteDetails = {
  reason: "max_output_tokens",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `reason`                                               | [operations.Reason](../../models/operations/reason.md) | :heavy_check_mark:                                     | The reason the response is incomplete                  |