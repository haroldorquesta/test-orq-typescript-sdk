# PostV2LogsQueryItemsResponsePromptConfig

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponsePromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponsePromptConfig = {
  stream: false,
  model: "Wrangler",
  modelDbId: "a10f353e-a885-4963-ba5c-68c7fcdf69ba",
  modelType: "embedding",
  modelParameters: {},
  provider: "replicate",
  messages: [
    {
      role: "expected_output",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
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
| `modelType`                                                                                                                      | [operations.PostV2LogsQueryItemsResponseModelType](../../models/operations/postv2logsqueryitemsresponsemodeltype.md)             | :heavy_check_mark:                                                                                                               | The type of the model                                                                                                            |
| `modelParameters`                                                                                                                | [operations.PostV2LogsQueryItemsResponseModelParameters](../../models/operations/postv2logsqueryitemsresponsemodelparameters.md) | :heavy_check_mark:                                                                                                               | Model Parameters: Not all parameters apply to every model                                                                        |
| `provider`                                                                                                                       | [operations.PostV2LogsQueryItemsResponseProvider](../../models/operations/postv2logsqueryitemsresponseprovider.md)               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `messages`                                                                                                                       | [operations.PostV2LogsQueryItemsResponseMessages](../../models/operations/postv2logsqueryitemsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `integrationId`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The id of the resource                                                                                                           |
| `version`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |