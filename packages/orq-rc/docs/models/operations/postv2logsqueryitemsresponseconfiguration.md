# PostV2LogsQueryItemsResponseConfiguration

Defines the configuration settings which can either be for a user message or a text entry.


## Supported Types

### `operations.PostV2LogsQueryConfigurationResponse2001`

```typescript
const value: operations.PostV2LogsQueryConfigurationResponse2001 = {
  type: "last_user_message",
};
```

### `operations.PostV2LogsQueryConfigurationResponse2002`

```typescript
const value: operations.PostV2LogsQueryConfigurationResponse2002 = {
  type: "query",
  query: "<value>",
};
```

