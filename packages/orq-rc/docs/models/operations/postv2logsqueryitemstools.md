# PostV2LogsQueryItemsTools

## Example Usage

```typescript
import { PostV2LogsQueryItemsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsTools = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.PostV2LogsQueryItemsType](../../models/operations/postv2logsqueryitemstype.md)         | :heavy_check_mark:                                                                                 | The type of the tool. Currently, only `function` is supported.                                     |
| `function`                                                                                         | [operations.PostV2LogsQueryItemsFunction](../../models/operations/postv2logsqueryitemsfunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |