# PostV2LogsQueryMessage1

## Example Usage

```typescript
import { PostV2LogsQueryMessage1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessage1 = {
  role: "assistant",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                     | [operations.PostV2LogsQueryMessageRole](../../models/operations/postv2logsquerymessagerole.md)             | :heavy_check_mark:                                                                                         | The role of the prompt message                                                                             |
| `content`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `toolCalls`                                                                                                | [operations.PostV2LogsQueryMessageToolCalls](../../models/operations/postv2logsquerymessagetoolcalls.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |