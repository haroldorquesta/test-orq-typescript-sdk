# Filters


## Supported Types

### `operations.Filters1`

```typescript
const value: operations.Filters1 = {
  operator: "is",
  type: "date",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/usr/ports",
};
```

### `operations.Filters2`

```typescript
const value: operations.Filters2 = {
  operator: "is_not_empty",
  value: [
    "<value>",
  ],
  type: "number",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/dev",
};
```

### `operations.Filters3`

```typescript
const value: operations.Filters3 = {
  operator: "is_relative_time",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "object",
  name: "<value>",
  path: "/usr/sbin",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  operator: "is_not_empty",
  value: [
    117.14,
  ],
  type: "single-value-array",
  name: "<value>",
  path: "/usr/include",
};
```

### `operations.Filters5`

```typescript
const value: operations.Filters5 = {
  operator: "is_not",
  value: "<value>",
  type: "number",
  name: "<value>",
  path: "/boot/defaults",
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  operator: "is",
  type: "object",
  options: [
    {
      name: "<value>",
      path: "/home/user/dir",
      type: "single-value-array",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/var/log",
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  operator: "is",
  type: "date",
  name: "<value>",
  path: "/bin",
};
```

