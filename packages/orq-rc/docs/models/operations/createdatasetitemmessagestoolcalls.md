# CreateDatasetItemMessagesToolCalls

## Example Usage

```typescript
import { CreateDatasetItemMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the tool call.                                                                                     |
| `type`                                                                                                       | [operations.CreateDatasetItemMessagesType](../../models/operations/createdatasetitemmessagestype.md)         | :heavy_check_mark:                                                                                           | The type of the tool. Currently, only `function` is supported.                                               |
| `function`                                                                                                   | [operations.CreateDatasetItemMessagesFunction](../../models/operations/createdatasetitemmessagesfunction.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |