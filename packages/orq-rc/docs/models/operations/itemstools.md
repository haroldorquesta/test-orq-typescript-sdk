# ItemsTools

## Example Usage

```typescript
import { ItemsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [operations.ItemsType](../../models/operations/itemstype.md)         | :heavy_check_mark:                                                   | The type of the tool. Currently, only `function` is supported.       |
| `function`                                                           | [operations.ItemsFunction](../../models/operations/itemsfunction.md) | :heavy_check_mark:                                                   | N/A                                                                  |