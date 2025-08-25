# Tools

## Example Usage

```typescript
import { Tools } from "@orq-ai/node/models/operations";

let value: Tools = {
  function: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.CreateChatCompletionProxyType](../../models/operations/createchatcompletionproxytype.md) | :heavy_minus_sign:                                                                                   | The type of the tool. Currently, only function is supported.                                         |
| `function`                                                                                           | [operations.CreateChatCompletionFunction](../../models/operations/createchatcompletionfunction.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |