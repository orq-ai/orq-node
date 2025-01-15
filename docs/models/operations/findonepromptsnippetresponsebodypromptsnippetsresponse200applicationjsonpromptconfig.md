# FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONPromptConfig

## Example Usage

```typescript
import {
  FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONPromptConfig,
} from "@orq-ai/node/models/operations";

let value:
  FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONPromptConfig =
    {
      messages: [
        {
          role: "correction",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://little-pulse.biz",
              },
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `model`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `modelDbId`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | The id of the resource                                                                                                                                                                                                   |
| `modelType`                                                                                                                                                                                                              | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONModelType](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200applicationjsonmodeltype.md)             | :heavy_minus_sign:                                                                                                                                                                                                       | The type of the model                                                                                                                                                                                                    |
| `modelParameters`                                                                                                                                                                                                        | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONModelParameters](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200applicationjsonmodelparameters.md) | :heavy_minus_sign:                                                                                                                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                                                                                                                |
| `provider`                                                                                                                                                                                                               | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONProvider](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200applicationjsonprovider.md)               | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `integrationId`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | The id of the resource                                                                                                                                                                                                   |
| `version`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `messages`                                                                                                                                                                                                               | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponse200ApplicationJSONMessages](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponse200applicationjsonmessages.md)[]             | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |