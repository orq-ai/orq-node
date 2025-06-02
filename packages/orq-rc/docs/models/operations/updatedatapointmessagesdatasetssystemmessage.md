# UpdateDatapointMessagesDatasetsSystemMessage

## Example Usage

```typescript
import { UpdateDatapointMessagesDatasetsSystemMessage } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesDatasetsSystemMessage = {
  role: "system",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.UpdateDatapointMessagesDatasetsResponse200Role](../../models/operations/updatedatapointmessagesdatasetsresponse200role.md) | :heavy_check_mark:                                                                                                                     | The role of the messages author, in this case `system`.                                                                                |
| `content`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The contents of the system message.                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | An optional name for the participant. Provides the model information to differentiate between participants of the same role.           |