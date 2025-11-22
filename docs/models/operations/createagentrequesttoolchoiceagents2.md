# CreateAgentRequestToolChoiceAgents2

## Example Usage

```typescript
import { CreateAgentRequestToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.CreateAgentRequestToolChoiceAgentsType](../../models/operations/createagentrequesttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                                             | The type of the tool. Currently, only function is supported.                                                                   |
| `function`                                                                                                                     | [operations.CreateAgentRequestToolChoiceAgentsFunction](../../models/operations/createagentrequesttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |