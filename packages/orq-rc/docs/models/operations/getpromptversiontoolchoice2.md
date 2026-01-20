# GetPromptVersionToolChoice2

## Example Usage

```typescript
import { GetPromptVersionToolChoice2 } from "@orq-ai/node/models/operations";

let value: GetPromptVersionToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.GetPromptVersionToolChoiceType](../../models/operations/getpromptversiontoolchoicetype.md)         | :heavy_minus_sign:                                                                                             | The type of the tool. Currently, only function is supported.                                                   |
| `function`                                                                                                     | [operations.GetPromptVersionToolChoiceFunction](../../models/operations/getpromptversiontoolchoicefunction.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |