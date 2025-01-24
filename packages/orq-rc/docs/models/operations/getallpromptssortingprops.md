# GetAllPromptsSortingProps

## Example Usage

```typescript
import { GetAllPromptsSortingProps } from "@orq-ai/node/models/operations";

let value: GetAllPromptsSortingProps = {
  key: "<key>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The path to sort by                                                                    |
| `direction`                                                                            | [operations.GetAllPromptsDirection](../../models/operations/getallpromptsdirection.md) | :heavy_minus_sign:                                                                     | The direction to sort by                                                               |