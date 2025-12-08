# UpdateAgentToolChoiceAgentsResponse2002

## Example Usage

```typescript
import { UpdateAgentToolChoiceAgentsResponse2002 } from "@orq-ai/node/models/operations";

let value: UpdateAgentToolChoiceAgentsResponse2002 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.UpdateAgentToolChoiceAgentsResponse200Type](../../models/operations/updateagenttoolchoiceagentsresponse200type.md)         | :heavy_minus_sign:                                                                                                                     | The type of the tool. Currently, only function is supported.                                                                           |
| `function`                                                                                                                             | [operations.UpdateAgentToolChoiceAgentsResponse200Function](../../models/operations/updateagenttoolchoiceagentsresponse200function.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |