# DeploymentsTools

## Example Usage

```typescript
import { DeploymentsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: DeploymentsTools = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [operations.DeploymentsType](../../models/operations/deploymentstype.md)         | :heavy_check_mark:                                                               | The type of the tool. Currently, only `function` is supported.                   |
| `function`                                                                       | [operations.DeploymentsFunction](../../models/operations/deploymentsfunction.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `id`                                                                             | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |