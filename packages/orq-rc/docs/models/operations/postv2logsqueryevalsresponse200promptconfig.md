# PostV2LogsQueryEvalsResponse200PromptConfig

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200PromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200PromptConfig = {
  stream: false,
  model: "Countach",
  modelDbId: "c5a87e8d-b0c3-4e05-a17d-425d231b64b5",
  modelType: "stt",
  modelParameters: {},
  provider: "huggingface",
  messages: [
    {
      role: "expected_output",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                               | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `model`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `modelDbId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The id of the resource                                                                                                                 |
| `modelType`                                                                                                                            | [operations.PostV2LogsQueryEvalsResponse200ModelType](../../models/operations/postv2logsqueryevalsresponse200modeltype.md)             | :heavy_check_mark:                                                                                                                     | The type of the model                                                                                                                  |
| `modelParameters`                                                                                                                      | [operations.PostV2LogsQueryEvalsResponse200ModelParameters](../../models/operations/postv2logsqueryevalsresponse200modelparameters.md) | :heavy_check_mark:                                                                                                                     | Model Parameters: Not all parameters apply to every model                                                                              |
| `provider`                                                                                                                             | [operations.PostV2LogsQueryEvalsResponse200Provider](../../models/operations/postv2logsqueryevalsresponse200provider.md)               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `messages`                                                                                                                             | [operations.PostV2LogsQueryEvalsResponse200Messages](../../models/operations/postv2logsqueryevalsresponse200messages.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `integrationId`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The id of the resource                                                                                                                 |
| `version`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |