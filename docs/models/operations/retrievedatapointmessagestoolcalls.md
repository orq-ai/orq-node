# RetrieveDatapointMessagesToolCalls

## Example Usage

```typescript
import { RetrieveDatapointMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the tool call.                                                                                     |
| `type`                                                                                                       | [operations.RetrieveDatapointMessagesType](../../models/operations/retrievedatapointmessagestype.md)         | :heavy_check_mark:                                                                                           | The type of the tool. Currently, only `function` is supported.                                               |
| `function`                                                                                                   | [operations.RetrieveDatapointMessagesFunction](../../models/operations/retrievedatapointmessagesfunction.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |