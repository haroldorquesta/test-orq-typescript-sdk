# ItemsPromptConfig

## Example Usage

```typescript
import { ItemsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsPromptConfig = {
  stream: false,
  model: "A4",
  modelDbId: "e2850557-bf8f-4892-9944-6a94037e9e97",
  modelType: "rerank",
  modelParameters: {},
  provider: "azure",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://obvious-king.com",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stream`                                                                           | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `modelDbId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The id of the resource                                                             |
| `modelType`                                                                        | [operations.ItemsModelType](../../models/operations/itemsmodeltype.md)             | :heavy_check_mark:                                                                 | The type of the model                                                              |
| `modelParameters`                                                                  | [operations.ItemsModelParameters](../../models/operations/itemsmodelparameters.md) | :heavy_check_mark:                                                                 | Model Parameters: Not all parameters apply to every model                          |
| `provider`                                                                         | [operations.ItemsProvider](../../models/operations/itemsprovider.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `messages`                                                                         | [operations.ItemsMessages](../../models/operations/itemsmessages.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `integrationId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The id of the resource                                                             |
| `version`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |