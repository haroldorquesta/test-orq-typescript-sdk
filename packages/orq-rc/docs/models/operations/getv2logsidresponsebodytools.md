# GetV2LogsIdResponseBodyTools

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyTools = {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.GetV2LogsIdResponseBodyType](../../models/operations/getv2logsidresponsebodytype.md)         | :heavy_check_mark:                                                                                       | The type of the tool. Currently, only `function` is supported.                                           |
| `function`                                                                                               | [operations.GetV2LogsIdResponseBodyFunction](../../models/operations/getv2logsidresponsebodyfunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |