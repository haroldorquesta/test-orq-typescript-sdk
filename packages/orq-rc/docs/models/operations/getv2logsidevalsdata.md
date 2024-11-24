# GetV2LogsIdEvalsData

## Example Usage

```typescript
import { GetV2LogsIdEvalsData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "911",
    modelDbId: "c0c58013-8d0e-425b-ae36-4ac9321d1e59",
    modelType: "tts",
    modelParameters: {},
    provider: "replicate",
    messages: [
      {
        role: "correction",
        content: "<value>",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                | [operations.GetV2LogsIdEvalsChoices](../../models/operations/getv2logsidevalschoices.md)[]               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `action`                                                                                                 | [operations.GetV2LogsIdEvalsAction](../../models/operations/getv2logsidevalsaction.md)                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptConfig`                                                                                           | [operations.GetV2LogsIdEvalsPromptConfig](../../models/operations/getv2logsidevalspromptconfig.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `variables`                                                                                              | [operations.GetV2LogsIdEvalsVariables](../../models/operations/getv2logsidevalsvariables.md)[]           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `performance`                                                                                            | [operations.GetV2LogsIdEvalsPerformance](../../models/operations/getv2logsidevalsperformance.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `usage`                                                                                                  | [operations.GetV2LogsIdEvalsUsage](../../models/operations/getv2logsidevalsusage.md)                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `billing`                                                                                                | [operations.GetV2LogsIdEvalsBilling](../../models/operations/getv2logsidevalsbilling.md)                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `tools`                                                                                                  | [operations.GetV2LogsIdEvalsTools](../../models/operations/getv2logsidevalstools.md)[]                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `promptSnippets`                                                                                         | [operations.GetV2LogsIdEvalsPromptSnippets](../../models/operations/getv2logsidevalspromptsnippets.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |