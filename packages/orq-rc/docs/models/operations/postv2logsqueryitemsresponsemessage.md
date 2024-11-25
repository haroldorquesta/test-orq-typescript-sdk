# PostV2LogsQueryItemsResponseMessage


## Supported Types

### `operations.PostV2LogsQueryMessageResponse2001`

```typescript
const value: operations.PostV2LogsQueryMessageResponse2001 = {
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

### `operations.PostV2LogsQueryMessageResponse2002`

```typescript
const value: operations.PostV2LogsQueryMessageResponse2002 = {
  role: "tool",
  content: "<value>",
};
```

### `operations.PostV2LogsQueryMessageResponse2003`

```typescript
const value: operations.PostV2LogsQueryMessageResponse2003 = {
  role: "expected_output",
  url: "https://pointless-toaster.net",
};
```

