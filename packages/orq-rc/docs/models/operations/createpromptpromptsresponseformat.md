# CreatePromptPromptsResponseFormat

An object specifying the format that the model must output. 

 Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema 

 Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.

Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.


## Supported Types

### `operations.CreatePromptResponseFormatPrompts1`

```typescript
const value: operations.CreatePromptResponseFormatPrompts1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
    },
  },
};
```

### `operations.CreatePromptResponseFormatPrompts2`

```typescript
const value: operations.CreatePromptResponseFormatPrompts2 = {
  type: "json_object",
};
```

### `operations.CreatePromptResponseFormatPrompts3`

```typescript
const value: operations.CreatePromptResponseFormatPrompts3 = {
  type: "text",
};
```

### `operations.CreatePromptResponseFormat4`

```typescript
const value: operations.CreatePromptResponseFormat4 = "flac";
```

### `operations.CreatePromptResponseFormat5`

```typescript
const value: operations.CreatePromptResponseFormat5 = "base64_json";
```

### `operations.CreatePromptResponseFormat6`

```typescript
const value: operations.CreatePromptResponseFormat6 = "text";
```

