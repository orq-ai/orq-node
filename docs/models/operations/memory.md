# Memory

Memory configuration for the agent execution. Used to associate memory stores with specific entities like users or sessions.

## Example Usage

```typescript
import { Memory } from "@orq-ai/node/models/operations";

let value: Memory = {
  entityId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                                                                                             | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | An entity ID used to link memory stores to a specific user, session, or conversation. This ID is used to isolate and retrieve memories specific to the entity across agent executions. |