# ListAgentsToolChoiceAgents2

## Example Usage

```typescript
import { ListAgentsToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: ListAgentsToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.ListAgentsToolChoiceAgentsType](../../models/operations/listagentstoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                             | The type of the tool. Currently, only function is supported.                                                   |
| `function`                                                                                                     | [operations.ListAgentsToolChoiceAgentsFunction](../../models/operations/listagentstoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |