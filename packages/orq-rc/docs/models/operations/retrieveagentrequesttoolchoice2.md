# RetrieveAgentRequestToolChoice2

## Example Usage

```typescript
import { RetrieveAgentRequestToolChoice2 } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.RetrieveAgentRequestToolChoiceType](../../models/operations/retrieveagentrequesttoolchoicetype.md)         | :heavy_minus_sign:                                                                                                     | The type of the tool. Currently, only function is supported.                                                           |
| `function`                                                                                                             | [operations.RetrieveAgentRequestToolChoiceFunction](../../models/operations/retrieveagentrequesttoolchoicefunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |