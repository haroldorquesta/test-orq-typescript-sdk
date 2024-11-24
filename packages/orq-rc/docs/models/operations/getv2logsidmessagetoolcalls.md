# GetV2LogsIdMessageToolCalls

## Example Usage

```typescript
import { GetV2LogsIdMessageToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `index`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.GetV2LogsIdMessageType](../../models/operations/getv2logsidmessagetype.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `function`                                                                                     | [operations.GetV2LogsIdMessageFunction](../../models/operations/getv2logsidmessagefunction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |