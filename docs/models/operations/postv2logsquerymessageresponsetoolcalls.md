# PostV2LogsQueryMessageResponseToolCalls

## Example Usage

```typescript
import { PostV2LogsQueryMessageResponseToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `index`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.PostV2LogsQueryMessageResponseType](../../models/operations/postv2logsquerymessageresponsetype.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `function`                                                                                                             | [operations.PostV2LogsQueryMessageResponseFunction](../../models/operations/postv2logsquerymessageresponsefunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |