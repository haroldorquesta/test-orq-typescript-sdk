# PostV2LogsQueryEvalsResponse200ApplicationJSONData

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJSONData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJSONData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "V90",
    modelDbId: "382fd5c9-323a-4fce-93e1-f2555bd984e9",
    modelType: "image",
    modelParameters: {},
    provider: "openai",
    messages: [
      {
        role: "system",
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                                      | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONChoices](../../models/operations/postv2logsqueryevalsresponse200applicationjsonchoices.md)[]         | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `action`                                                                                                                                                       | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONAction](../../models/operations/postv2logsqueryevalsresponse200applicationjsonaction.md)             | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `promptConfig`                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONPromptConfig](../../models/operations/postv2logsqueryevalsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `variables`                                                                                                                                                    | [operations.PostV2LogsQueryEvalsVariables](../../models/operations/postv2logsqueryevalsvariables.md)[]                                                         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `performance`                                                                                                                                                  | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONPerformance](../../models/operations/postv2logsqueryevalsresponse200applicationjsonperformance.md)   | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `usage`                                                                                                                                                        | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONUsage](../../models/operations/postv2logsqueryevalsresponse200applicationjsonusage.md)               | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `billing`                                                                                                                                                      | [operations.PostV2LogsQueryEvalsBilling](../../models/operations/postv2logsqueryevalsbilling.md)                                                               | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `tools`                                                                                                                                                        | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONTools](../../models/operations/postv2logsqueryevalsresponse200applicationjsontools.md)[]             | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `promptSnippets`                                                                                                                                               | [operations.PostV2LogsQueryEvalsPromptSnippets](../../models/operations/postv2logsqueryevalspromptsnippets.md)[]                                               | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |