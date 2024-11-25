# EvalsData

## Example Usage

```typescript
import { EvalsData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Aventador",
    modelDbId: "4bc6536d-ab68-47bd-8f3e-1e7930489639",
    modelType: "tts",
    modelParameters: {},
    provider: "leonardoai",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `choices`                                                                          | [operations.EvalsChoices](../../models/operations/evalschoices.md)[]               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `action`                                                                           | [operations.EvalsAction](../../models/operations/evalsaction.md)                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `promptConfig`                                                                     | [operations.EvalsPromptConfig](../../models/operations/evalspromptconfig.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `variables`                                                                        | [operations.EvalsVariables](../../models/operations/evalsvariables.md)[]           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `performance`                                                                      | [operations.EvalsPerformance](../../models/operations/evalsperformance.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `usage`                                                                            | [operations.EvalsUsage](../../models/operations/evalsusage.md)                     | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `billing`                                                                          | [operations.EvalsBilling](../../models/operations/evalsbilling.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `tools`                                                                            | [operations.EvalsTools](../../models/operations/evalstools.md)[]                   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `promptSnippets`                                                                   | [operations.EvalsPromptSnippets](../../models/operations/evalspromptsnippets.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |