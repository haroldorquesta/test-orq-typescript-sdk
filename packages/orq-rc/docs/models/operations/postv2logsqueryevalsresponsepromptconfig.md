# PostV2LogsQueryEvalsResponsePromptConfig

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponsePromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponsePromptConfig = {
  stream: false,
  model: "Roadster",
  modelDbId: "e9438ab2-8638-4483-be59-1a4f693dc3e0",
  modelType: "vision",
  modelParameters: {},
  provider: "fal",
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                         | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `model`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `modelDbId`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The id of the resource                                                                                                           |
| `modelType`                                                                                                                      | [operations.PostV2LogsQueryEvalsResponseModelType](../../models/operations/postv2logsqueryevalsresponsemodeltype.md)             | :heavy_check_mark:                                                                                                               | The type of the model                                                                                                            |
| `modelParameters`                                                                                                                | [operations.PostV2LogsQueryEvalsResponseModelParameters](../../models/operations/postv2logsqueryevalsresponsemodelparameters.md) | :heavy_check_mark:                                                                                                               | Model Parameters: Not all parameters apply to every model                                                                        |
| `provider`                                                                                                                       | [operations.PostV2LogsQueryEvalsResponseProvider](../../models/operations/postv2logsqueryevalsresponseprovider.md)               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `messages`                                                                                                                       | [operations.PostV2LogsQueryEvalsResponseMessages](../../models/operations/postv2logsqueryevalsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `integrationId`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The id of the resource                                                                                                           |
| `version`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |