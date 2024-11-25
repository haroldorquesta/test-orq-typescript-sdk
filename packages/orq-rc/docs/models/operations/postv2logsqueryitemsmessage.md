# PostV2LogsQueryItemsMessage


## Supported Types

### `operations.PostV2LogsQueryMessageResponse1`

```typescript
const value: operations.PostV2LogsQueryMessageResponse1 = {
  role: "prompt",
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

### `operations.PostV2LogsQueryMessageResponse2`

```typescript
const value: operations.PostV2LogsQueryMessageResponse2 = {
  role: "expected_output",
  content: "<value>",
};
```

### `operations.PostV2LogsQueryMessageResponse3`

```typescript
const value: operations.PostV2LogsQueryMessageResponse3 = {
  role: "system",
  url: "https://remorseful-dulcimer.net",
};
```

