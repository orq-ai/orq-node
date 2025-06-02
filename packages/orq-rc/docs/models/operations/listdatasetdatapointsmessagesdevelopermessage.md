# ListDatasetDatapointsMessagesDeveloperMessage

## Example Usage

```typescript
import { ListDatasetDatapointsMessagesDeveloperMessage } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.ListDatasetDatapointsMessagesRole](../../models/operations/listdatasetdatapointsmessagesrole.md)                 | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case  `developer`.                                                                  |
| `content`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The contents of the developer message.                                                                                       |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |