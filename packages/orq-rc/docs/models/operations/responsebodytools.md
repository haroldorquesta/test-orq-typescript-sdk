# ResponseBodyTools

## Example Usage

```typescript
import { ResponseBodyTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyTools = {
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.ResponseBodyType](../../models/operations/responsebodytype.md)         | :heavy_check_mark:                                                                 | The type of the tool. Currently, only `function` is supported.                     |
| `function`                                                                         | [operations.ResponseBodyFunction](../../models/operations/responsebodyfunction.md) | :heavy_check_mark:                                                                 | N/A                                                                                |