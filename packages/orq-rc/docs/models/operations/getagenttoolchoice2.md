# GetAgentToolChoice2

## Example Usage

```typescript
import { GetAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: GetAgentToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [operations.GetAgentToolChoiceType](../../models/operations/getagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                             | The type of the tool. Currently, only function is supported.                                   |
| `function`                                                                                     | [operations.GetAgentToolChoiceFunction](../../models/operations/getagenttoolchoicefunction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |