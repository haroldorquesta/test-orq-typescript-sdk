# PostV2LogsQueryEvalsData

## Example Usage

```typescript
import { PostV2LogsQueryEvalsData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "1",
    modelDbId: "21351629-6ac1-46f0-a77d-4c075c61b057",
    modelType: "embedding",
    modelParameters: {},
    provider: "openai",
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                                            | [operations.PostV2LogsQueryEvalsChoices](../../models/operations/postv2logsqueryevalschoices.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `action`                                                                                                                                                             | [operations.PostV2LogsQueryEvalsAction](../../models/operations/postv2logsqueryevalsaction.md)                                                                       | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                       | [operations.PostV2LogsQueryEvalsPromptConfig](../../models/operations/postv2logsqueryevalspromptconfig.md)                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `variables`                                                                                                                                                          | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONVariables](../../models/operations/postv2logsqueryevalsresponse200applicationjsonvariables.md)[]           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `performance`                                                                                                                                                        | [operations.PostV2LogsQueryEvalsPerformance](../../models/operations/postv2logsqueryevalsperformance.md)                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `usage`                                                                                                                                                              | [operations.PostV2LogsQueryEvalsUsage](../../models/operations/postv2logsqueryevalsusage.md)                                                                         | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `billing`                                                                                                                                                            | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONBilling](../../models/operations/postv2logsqueryevalsresponse200applicationjsonbilling.md)                 | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `tools`                                                                                                                                                              | [operations.PostV2LogsQueryEvalsTools](../../models/operations/postv2logsqueryevalstools.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `promptSnippets`                                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONPromptSnippets](../../models/operations/postv2logsqueryevalsresponse200applicationjsonpromptsnippets.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |