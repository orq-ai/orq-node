# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "@orq-ai/node/models/components";

let value: Logprobs = {
  content: [],
  refusal: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                      | [components.AgentThoughtStreamingEventContent](../../models/components/agentthoughtstreamingeventcontent.md)[] | :heavy_check_mark:                                                                                             | A list of message content tokens with log probability information.                                             |
| `refusal`                                                                                                      | [components.Refusal](../../models/components/refusal.md)[]                                                     | :heavy_check_mark:                                                                                             | A list of message refusal tokens with log probability information.                                             |