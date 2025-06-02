# CreateDatasetItemMessagesDatasetsSystemMessage

## Example Usage

```typescript
import { CreateDatasetItemMessagesDatasetsSystemMessage } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesDatasetsSystemMessage = {
  role: "system",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                     | [operations.CreateDatasetItemMessagesDatasetsResponse200Role](../../models/operations/createdatasetitemmessagesdatasetsresponse200role.md) | :heavy_check_mark:                                                                                                                         | The role of the messages author, in this case `system`.                                                                                    |
| `content`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The contents of the system message.                                                                                                        |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | An optional name for the participant. Provides the model information to differentiate between participants of the same role.               |