# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22ResponseFormat

An object specifying the format that the model must output. 

 Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema 

 Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.

Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat1`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat1 =
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

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat2`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat2 =
    {
      type: "json_object",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat3`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat3 =
    {
      type: "text",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat4`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat4 =
    "flac";
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat5`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat5 =
    "url";
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat6`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseFormat6 =
    "verbose_json";
```

