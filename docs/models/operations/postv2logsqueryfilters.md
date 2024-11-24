# PostV2LogsQueryFilters


## Supported Types

### `operations.PostV2LogsQueryFilters1`

```typescript
const value: operations.PostV2LogsQueryFilters1 = {
  type: "id",
  id: "<id>",
  path: "/root",
};
```

### `operations.PostV2LogsQueryFilters2`

```typescript
const value: operations.PostV2LogsQueryFilters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.PostV2LogsQueryFilters3`

```typescript
const value: operations.PostV2LogsQueryFilters3 = {
  type: "string",
  operator: "equals",
  value: "<value>",
  path: "/usr/include",
};
```

### `operations.PostV2LogsQueryFilters4`

```typescript
const value: operations.PostV2LogsQueryFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/mnt",
};
```

