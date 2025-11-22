# CreateAgentRequestToolChoiceAgentsResponse2

## Example Usage

```typescript
import { CreateAgentRequestToolChoiceAgentsResponse2 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestToolChoiceAgentsResponse2 = {
  function: {},
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.CreateAgentRequestToolChoiceAgentsResponseType](../../models/operations/createagentrequesttoolchoiceagentsresponsetype.md)         | :heavy_minus_sign:                                                                                                                             | The type of the tool. Currently, only function is supported.                                                                                   |
| `function`                                                                                                                                     | [operations.CreateAgentRequestToolChoiceAgentsResponseFunction](../../models/operations/createagentrequesttoolchoiceagentsresponsefunction.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |