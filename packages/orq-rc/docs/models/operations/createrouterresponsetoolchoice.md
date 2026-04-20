# CreateRouterResponseToolChoice

How the model should use the provided tools. Can be a string shorthand or a specific function selector.


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

