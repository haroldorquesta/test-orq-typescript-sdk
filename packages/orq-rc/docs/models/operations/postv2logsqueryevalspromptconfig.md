# PostV2LogsQueryEvalsPromptConfig

## Example Usage

```typescript
import { PostV2LogsQueryEvalsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsPromptConfig = {
  stream: false,
  model: "Focus",
  modelDbId: "29791e63-8eb5-44a1-857c-5cc03a705af3",
  modelType: "embedding",
  modelParameters: {},
  provider: "aws",
  messages: [
    {
      role: "prompt",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                         | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `modelDbId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The id of the resource                                                                                           |
| `modelType`                                                                                                      | [operations.PostV2LogsQueryEvalsModelType](../../models/operations/postv2logsqueryevalsmodeltype.md)             | :heavy_check_mark:                                                                                               | The type of the model                                                                                            |
| `modelParameters`                                                                                                | [operations.PostV2LogsQueryEvalsModelParameters](../../models/operations/postv2logsqueryevalsmodelparameters.md) | :heavy_check_mark:                                                                                               | Model Parameters: Not all parameters apply to every model                                                        |
| `provider`                                                                                                       | [operations.PostV2LogsQueryEvalsProvider](../../models/operations/postv2logsqueryevalsprovider.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [operations.PostV2LogsQueryEvalsMessages](../../models/operations/postv2logsqueryevalsmessages.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `version`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |