# GetV2LogsIdMessage1

## Example Usage

```typescript
import { GetV2LogsIdMessage1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessage1 = {
  role: "exception",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `role`                                                                                             | [operations.GetV2LogsIdMessageRole](../../models/operations/getv2logsidmessagerole.md)             | :heavy_check_mark:                                                                                 | The role of the prompt message                                                                     |
| `content`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `toolCalls`                                                                                        | [operations.GetV2LogsIdMessageToolCalls](../../models/operations/getv2logsidmessagetoolcalls.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |