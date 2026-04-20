# SpecificFunction

Select a specific function tool by name.

## Example Usage

```typescript
import { SpecificFunction } from "@orq-ai/node/models/operations";

let value: SpecificFunction = {
  name: "<value>",
  type: "function",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The name of the function to call.                                                                              |
| `type`                                                                                                         | [operations.CreateRouterResponseToolChoiceType](../../models/operations/createrouterresponsetoolchoicetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |