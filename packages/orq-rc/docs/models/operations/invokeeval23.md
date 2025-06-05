# InvokeEval23

## Example Usage

```typescript
import { InvokeEval23 } from "@orq-ai/node/models/operations";

let value: InvokeEval23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.InvokeEval2EvalsRequestType](../../models/operations/invokeeval2evalsrequesttype.md) | :heavy_check_mark:                                                                               | The type of the content part. Always `file`.                                                     |
| `file`                                                                                           | [operations.InvokeEval2File](../../models/operations/invokeeval2file.md)                         | :heavy_check_mark:                                                                               | N/A                                                                                              |