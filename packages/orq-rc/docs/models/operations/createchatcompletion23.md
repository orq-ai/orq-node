# CreateChatCompletion23

## Example Usage

```typescript
import { CreateChatCompletion23 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletion23 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "wav",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.CreateChatCompletion2ProxyRequestType](../../models/operations/createchatcompletion2proxyrequesttype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `inputAudio`                                                                                                         | [operations.CreateChatCompletion2InputAudio](../../models/operations/createchatcompletion2inputaudio.md)             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |