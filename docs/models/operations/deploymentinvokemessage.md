# DeploymentInvokeMessage


## Supported Types

### `operations.DeploymentInvokeMessage1`

```typescript
const value: operations.DeploymentInvokeMessage1 = {
  role: "system",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

### `operations.DeploymentInvokeMessage2`

```typescript
const value: operations.DeploymentInvokeMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  role: "system",
  url: "https://crafty-bin.com",
};
```
