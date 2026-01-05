# ReasoningPart

A message part containing reasoning or chain-of-thought content

## Example Usage

```typescript
import { ReasoningPart } from "@orq-ai/node/models/components";

let value: ReasoningPart = {
  id: "reasoning_01hxyz123abc",
  metadata: {
    "source": "user_input",
    "timestamp": "2024-01-15T10:30:00Z",
  },
  kind: "reasoning",
  reasoning: "Let me analyze this step by step...",
  signature: "sha256:a1b2c3d4e5f6...",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                  | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Unique identifier for the part. Format: reasoning_{ulid} (e.g., reasoning_01hxyz...)                                                                  | reasoning_01hxyz123abc                                                                                                                                |
| `metadata`                                                                                                                                            | Record<string, *any*>                                                                                                                                 | :heavy_minus_sign:                                                                                                                                    | Optional metadata associated with the message part. Can store arbitrary key-value pairs for custom data. Maximum size of 50KB and maximum of 20 keys. | {<br/>"source": "user_input",<br/>"timestamp": "2024-01-15T10:30:00Z"<br/>}                                                                           |
| `kind`                                                                                                                                                | *"reasoning"*                                                                                                                                         | :heavy_check_mark:                                                                                                                                    | Type discriminator indicating this is a reasoning part                                                                                                | reasoning                                                                                                                                             |
| `reasoning`                                                                                                                                           | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The reasoning or thought process behind the response. Used for chain-of-thought or extended thinking.                                                 | Let me analyze this step by step...                                                                                                                   |
| `signature`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Optional cryptographic signature to verify the authenticity and integrity of the reasoning content                                                    | sha256:a1b2c3d4e5f6...                                                                                                                                |