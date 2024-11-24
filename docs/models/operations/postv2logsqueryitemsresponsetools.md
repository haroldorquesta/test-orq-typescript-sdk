# PostV2LogsQueryItemsResponseTools

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseTools = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.PostV2LogsQueryItemsResponseType](../../models/operations/postv2logsqueryitemsresponsetype.md)         | :heavy_check_mark:                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                     |
| `function`                                                                                                         | [operations.PostV2LogsQueryItemsResponseFunction](../../models/operations/postv2logsqueryitemsresponsefunction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |