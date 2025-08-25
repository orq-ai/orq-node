# CreateResponseToolChoiceProxy2

## Example Usage

```typescript
import { CreateResponseToolChoiceProxy2 } from "@orq-ai/node/models/operations";

let value: CreateResponseToolChoiceProxy2 = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.CreateResponseToolChoiceProxyResponseType](../../models/operations/createresponsetoolchoiceproxyresponsetype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.CreateResponseToolChoiceFunction](../../models/operations/createresponsetoolchoicefunction.md)                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |