# InputMessage

## Example Usage

```typescript
import { InputMessage } from "@orq-ai/node/models/components";

let value: InputMessage = {
  role: "agent",
  parts: [
    {
      kind: "file",
      file: {
        bytes: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `role`                                                                                                 | [components.AgentStartedStreamingEventRole](../../models/components/agentstartedstreamingeventrole.md) | :heavy_check_mark:                                                                                     | Extended A2A message role                                                                              |
| `parts`                                                                                                | *components.AgentStartedStreamingEventParts*[]                                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |