# ResponseBodyMessage


## Supported Types

### `operations.GetV2LogsIdMessage1`

```typescript
const value: operations.GetV2LogsIdMessage1 = {
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

### `operations.GetV2LogsIdMessage2`

```typescript
const value: operations.GetV2LogsIdMessage2 = {
  role: "exception",
  content: "<value>",
};
```

### `operations.GetV2LogsIdMessage3`

```typescript
const value: operations.GetV2LogsIdMessage3 = {
  role: "tool",
  url: "https://rewarding-barge.biz/",
};
```

