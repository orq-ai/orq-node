# Four

## Example Usage

```typescript
import { Four } from "@orq-ai/node/models/components";

let value: Four = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.InvokeDeploymentRequest2PrefixMessagesType](../../models/components/invokedeploymentrequest2prefixmessagestype.md) | :heavy_check_mark:                                                                                                             | The type of the content part. Always `file`.                                                                                   |
| `file`                                                                                                                         | [components.FileT](../../models/components/filet.md)                                                                           | :heavy_check_mark:                                                                                                             | File data for the content part. Must contain either file_data or uri, but not both.                                            |