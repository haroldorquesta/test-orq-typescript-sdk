# PostV2LogsQueryItemsPromptConfig

## Example Usage

```typescript
import { PostV2LogsQueryItemsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsPromptConfig = {
  stream: false,
  model: "Sentra",
  modelDbId: "cfc9ea42-9bd4-4e9b-bce4-6ed67b0538c2",
  modelType: "vision",
  modelParameters: {},
  provider: "groq",
  messages: [
    {
      role: "user",
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
| `modelType`                                                                                                      | [operations.PostV2LogsQueryItemsModelType](../../models/operations/postv2logsqueryitemsmodeltype.md)             | :heavy_check_mark:                                                                                               | The type of the model                                                                                            |
| `modelParameters`                                                                                                | [operations.PostV2LogsQueryItemsModelParameters](../../models/operations/postv2logsqueryitemsmodelparameters.md) | :heavy_check_mark:                                                                                               | Model Parameters: Not all parameters apply to every model                                                        |
| `provider`                                                                                                       | [operations.PostV2LogsQueryItemsProvider](../../models/operations/postv2logsqueryitemsprovider.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [operations.PostV2LogsQueryItemsMessages](../../models/operations/postv2logsqueryitemsmessages.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The id of the resource                                                                                           |
| `version`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |