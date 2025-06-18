# ListDatasetDatapointsMessagesToolCalls

## Example Usage

```typescript
import { ListDatasetDatapointsMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the tool call.                                                                                             |
| `type`                                                                                                               | [operations.ListDatasetDatapointsMessagesType](../../models/operations/listdatasetdatapointsmessagestype.md)         | :heavy_check_mark:                                                                                                   | The type of the tool. Currently, only `function` is supported.                                                       |
| `function`                                                                                                           | [operations.ListDatasetDatapointsMessagesFunction](../../models/operations/listdatasetdatapointsmessagesfunction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |