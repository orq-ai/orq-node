# InputText

Response format applied by a configuration_update item.

## Example Usage

```typescript
import { InputText } from "@orq-ai/node/models/operations";

let value: InputText = {
  format: {
    type: "text",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `format`                                                 | *operations.InputFormat*                                 | :heavy_check_mark:                                       | The output format: plain text or structured JSON schema. |