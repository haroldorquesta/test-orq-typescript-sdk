# ItemsMessage


## Supported Types

### `operations.PostV2LogsQueryMessage1`

```typescript
const value: operations.PostV2LogsQueryMessage1 = {
  role: "user",
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

### `operations.PostV2LogsQueryMessage2`

```typescript
const value: operations.PostV2LogsQueryMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.PostV2LogsQueryMessage3`

```typescript
const value: operations.PostV2LogsQueryMessage3 = {
  role: "system",
  url: "https://reflecting-exasperation.net",
};
```

