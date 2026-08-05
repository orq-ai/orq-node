# CacheConfigResponseFormat

An object specifying the format that the model must output. 

 Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema 

 Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.

Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.


## Supported Types

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse1 =
    {
      type: "json_schema",
      jsonSchema: {
        name: "<value>",
        schema: {
          "key": "<value>",
          "key1": "<value>",
        },
      },
    };
```

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse2 =
    {
      type: "json_object",
    };
```

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse3 =
    {
      type: "text",
    };
```

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse4 =
    "wav";
```

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse5`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse5 =
    "base64_json";
```

### `operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse6`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesResponse6 =
    "json";
```

