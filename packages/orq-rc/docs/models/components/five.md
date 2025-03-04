# Five

## Example Usage

```typescript
import { Five } from "@orq-ai/node/models/components";

let value: Five = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                 | [components.DeploymentsPrefixMessages5Role](../../models/components/deploymentsprefixmessages5role.md) | :heavy_check_mark:                                                                                     | The role of the messages author, in this case tool.                                                    |
| `content`                                                                                              | *components.DeploymentsPrefixMessagesContent*                                                          | :heavy_check_mark:                                                                                     | The contents of the tool message.                                                                      |
| `toolCallId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | Tool call that this message is responding to.                                                          |