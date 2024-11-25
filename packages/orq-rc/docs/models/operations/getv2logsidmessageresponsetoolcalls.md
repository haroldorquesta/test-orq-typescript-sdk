# GetV2LogsIdMessageResponseToolCalls

## Example Usage

```typescript
import { GetV2LogsIdMessageResponseToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [operations.GetV2LogsIdMessageResponseType](../../models/operations/getv2logsidmessageresponsetype.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `function`                                                                                                     | [operations.GetV2LogsIdMessageResponseFunction](../../models/operations/getv2logsidmessageresponsefunction.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |