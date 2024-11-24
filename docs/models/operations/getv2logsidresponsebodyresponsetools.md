# GetV2LogsIdResponseBodyResponseTools

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyResponseTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyResponseTools = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.GetV2LogsIdResponseBodyResponseType](../../models/operations/getv2logsidresponsebodyresponsetype.md)         | :heavy_check_mark:                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                           |
| `function`                                                                                                               | [operations.GetV2LogsIdResponseBodyResponseFunction](../../models/operations/getv2logsidresponsebodyresponsefunction.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |