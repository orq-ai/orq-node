# UpdatePromptResponseFormat

An object specifying the format that the model must output. 

 Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema 

 Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.

Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.


## Supported Types

### `operations.UpdatePromptResponseFormat1`

```typescript
const value: operations.UpdatePromptResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {},
  },
};
```

### `operations.UpdatePromptResponseFormat2`

```typescript
const value: operations.UpdatePromptResponseFormat2 = {
  type: "json_object",
};
```

### `operations.UpdatePromptResponseFormat3`

```typescript
const value: operations.UpdatePromptResponseFormat3 = {
  type: "text",
};
```

### `operations.UpdatePromptResponseFormat4`

```typescript
const value: operations.UpdatePromptResponseFormat4 = "pcm";
```

### `operations.ResponseFormat5`

```typescript
const value: operations.ResponseFormat5 = "base64_json";
```

### `operations.ResponseFormat6`

```typescript
const value: operations.ResponseFormat6 = "json";
```

