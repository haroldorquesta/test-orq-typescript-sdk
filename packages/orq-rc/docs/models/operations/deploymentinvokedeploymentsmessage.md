# DeploymentInvokeDeploymentsMessage


## Supported Types

### `operations.DeploymentInvokeMessageDeployments1`

```typescript
const value: operations.DeploymentInvokeMessageDeployments1 = {
  role: "correction",
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

### `operations.DeploymentInvokeMessageDeployments2`

```typescript
const value: operations.DeploymentInvokeMessageDeployments2 = {
  role: "tool",
  content: "<value>",
};
```

### `operations.DeploymentInvokeMessage3`

```typescript
const value: operations.DeploymentInvokeMessage3 = {
  role: "system",
  url: "https://creamy-wedding.info/",
};
```

