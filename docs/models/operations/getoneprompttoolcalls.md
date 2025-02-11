# GetOnePromptToolCalls

## Example Usage

```typescript
import { GetOnePromptToolCalls } from "@orq-ai/node/models/operations";

let value: GetOnePromptToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `index`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.GetOnePromptPromptsType](../../models/operations/getonepromptpromptstype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `function`                                                                               | [operations.GetOnePromptFunction](../../models/operations/getonepromptfunction.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |