# PostV2LogsQueryMessageToolCalls

## Example Usage

```typescript
import { PostV2LogsQueryMessageToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `index`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PostV2LogsQueryMessageType](../../models/operations/postv2logsquerymessagetype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `function`                                                                                             | [operations.PostV2LogsQueryMessageFunction](../../models/operations/postv2logsquerymessagefunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |