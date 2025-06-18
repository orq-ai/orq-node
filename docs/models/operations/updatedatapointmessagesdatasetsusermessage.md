# UpdateDatapointMessagesDatasetsUserMessage

## Example Usage

```typescript
import { UpdateDatapointMessagesDatasetsUserMessage } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesDatasetsUserMessage = {
  role: "user",
  content: [],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                               | [operations.UpdateDatapointMessagesDatasetsResponse200ApplicationJSONRole](../../models/operations/updatedatapointmessagesdatasetsresponse200applicationjsonrole.md) | :heavy_check_mark:                                                                                                                                                   | The role of the messages author, in this case `user`.                                                                                                                |
| `name`                                                                                                                                                               | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | An optional name for the participant. Provides the model information to differentiate between participants of the same role.                                         |
| `content`                                                                                                                                                            | *operations.UpdateDatapointMessagesDatasetsResponseContent*                                                                                                          | :heavy_check_mark:                                                                                                                                                   | The contents of the user message.                                                                                                                                    |