# GetV2LogsIdEvalsResponseData

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponseData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponseData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "CX-9",
    modelDbId: "f2be6cc7-c02a-4446-9546-7a92cf4ea6dd",
    modelType: "stt",
    modelParameters: {},
    provider: "aws",
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  variables: [
    {
      key: "<key>",
    },
  ],
  promptSnippets: [
    {
      id: "<id>",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `choices`                                                                                                                | [operations.GetV2LogsIdEvalsResponseChoices](../../models/operations/getv2logsidevalsresponsechoices.md)[]               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `action`                                                                                                                 | [operations.GetV2LogsIdEvalsResponseAction](../../models/operations/getv2logsidevalsresponseaction.md)                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `promptConfig`                                                                                                           | [operations.GetV2LogsIdEvalsResponsePromptConfig](../../models/operations/getv2logsidevalsresponsepromptconfig.md)       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `variables`                                                                                                              | [operations.GetV2LogsIdEvalsResponseVariables](../../models/operations/getv2logsidevalsresponsevariables.md)[]           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `performance`                                                                                                            | [operations.GetV2LogsIdEvalsResponsePerformance](../../models/operations/getv2logsidevalsresponseperformance.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `usage`                                                                                                                  | [operations.GetV2LogsIdEvalsResponseUsage](../../models/operations/getv2logsidevalsresponseusage.md)                     | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `billing`                                                                                                                | [operations.GetV2LogsIdEvalsResponseBilling](../../models/operations/getv2logsidevalsresponsebilling.md)                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `tools`                                                                                                                  | [operations.GetV2LogsIdEvalsResponseTools](../../models/operations/getv2logsidevalsresponsetools.md)[]                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `promptSnippets`                                                                                                         | [operations.GetV2LogsIdEvalsResponsePromptSnippets](../../models/operations/getv2logsidevalsresponsepromptsnippets.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |