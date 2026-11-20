# CreateRouterResponseToolChoice

How the model should use the provided tools. Native OpenAI requests can restrict the allowed tools.


## Supported Types

### `operations.Shorthand`

```typescript
const value: operations.Shorthand = "required";
```

### `operations.SpecificFunction`

```typescript
const value: operations.SpecificFunction = {
  name: "<value>",
  type: "function",
};
```

### `operations.AllowedTools`

```typescript
const value: operations.AllowedTools = {
  mode: "auto",
  tools: [
    {
      type: "<value>",
    },
  ],
  type: "allowed_tools",
};
```

