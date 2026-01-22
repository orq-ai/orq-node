# CreateSpeechRequestBody

input

## Example Usage

```typescript
import { CreateSpeechRequestBody } from "@orq-ai/node/models/operations";

let value: CreateSpeechRequestBody = {
  input: "<value>",
  model: "Camaro",
  voice: "<value>",
  orq: {
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    contact: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
    loadBalancer: [
      {
        type: "weight_based",
        model: "openai/gpt-4o",
        weight: 0.7,
      },
      {
        type: "weight_based",
        model: "openai/gpt-4o",
        weight: 0.7,
      },
    ],
    timeout: {
      callTimeout: 30000,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The text to generate audio for. The maximum length is 4096 characters                                                                                                                                                                                                                                                                       |
| `model`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | ID of the model to use                                                                                                                                                                                                                                                                                                                      |
| `voice`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The voice to use. <br/><br/> Available voices for OpenAI <br/><br/> `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer` <br/><br/> Available voices for ElevenLabs <br/><br/> `aria`, `roger`, `sarah`, `laura`, `charlie`, `george`, `callum`, `river`, `liam`, `charlotte`, `alice`, `matilda`, `will`, `jessica`, `eric`, `chris`, `brian`, `daniel`, `lily`, `bill` |
| `responseFormat`                                                                                                                                                                                                                                                                                                                            | [operations.CreateSpeechResponseFormat](../../models/operations/createspeechresponseformat.md)                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. If a format is provided but not supported by the provider, the response will be in the default format. When the provided format is not supported by the provider, the response will be in the default format.                                 |
| `speed`                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The speed of the generated audio.                                                                                                                                                                                                                                                                                                           |
| `orq`                                                                                                                                                                                                                                                                                                                                       | [operations.CreateSpeechOrq](../../models/operations/createspeechorq.md)                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |