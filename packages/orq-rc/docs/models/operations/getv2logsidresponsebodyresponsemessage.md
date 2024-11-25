# GetV2LogsIdResponseBodyResponseMessage


## Supported Types

### `operations.GetV2LogsIdMessageResponse2001`

```typescript
const value: operations.GetV2LogsIdMessageResponse2001 = {
  role: "assistant",
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

### `operations.GetV2LogsIdMessageResponse2002`

```typescript
const value: operations.GetV2LogsIdMessageResponse2002 = {
  role: "correction",
  content: "<value>",
};
```

### `operations.GetV2LogsIdMessageResponse2003`

```typescript
const value: operations.GetV2LogsIdMessageResponse2003 = {
  role: "tool",
  url: "https://minty-elevator.com",
};
```

