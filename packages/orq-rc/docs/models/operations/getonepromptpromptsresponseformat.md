# GetOnePromptPromptsResponseFormat

An object specifying the format that the model must output. 

 Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema 

 Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.

Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.


## Supported Types

### `operations.GetOnePromptResponseFormat1`

```typescript
const value: operations.GetOnePromptResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {},
  },
};
```

### `operations.GetOnePromptResponseFormat2`

```typescript
const value: operations.GetOnePromptResponseFormat2 = {
  type: "json_object",
};
```

### `operations.GetOnePromptResponseFormat3`

```typescript
const value: operations.GetOnePromptResponseFormat3 = {
  type: "text",
};
```

### `operations.GetOnePromptResponseFormat4`

```typescript
const value: operations.GetOnePromptResponseFormat4 = "mp3";
```

### `operations.GetOnePromptResponseFormat5`

```typescript
const value: operations.GetOnePromptResponseFormat5 = "url";
```

### `operations.GetOnePromptResponseFormat6`

```typescript
const value: operations.GetOnePromptResponseFormat6 = "json";
```

