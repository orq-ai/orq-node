# Custom

A custom tool that accepts free-form input.

## Example Usage

```typescript
import { Custom } from "@orq-ai/node/models/operations";

let value: Custom = {
  name: "<value>",
  type: "custom",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `async`                                                   | *boolean*                                                 | :heavy_minus_sign:                                        | Whether the tool response can be returned asynchronously. |
| `description`                                             | *string*                                                  | :heavy_minus_sign:                                        | A description of what the custom tool does.               |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | The name of the custom tool.                              |
| `type`                                                    | *"custom"*                                                | :heavy_check_mark:                                        | N/A                                                       |