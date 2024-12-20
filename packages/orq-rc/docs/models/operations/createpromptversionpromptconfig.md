# CreatePromptVersionPromptConfig

## Example Usage

```typescript
import { CreatePromptVersionPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: CreatePromptVersionPromptConfig = {
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://cautious-maintainer.name",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `model`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `modelType`                                                                                                    | [operations.CreatePromptVersionModelType](../../models/operations/createpromptversionmodeltype.md)             | :heavy_minus_sign:                                                                                             | The type of the model                                                                                          |
| `modelParameters`                                                                                              | [operations.CreatePromptVersionModelParameters](../../models/operations/createpromptversionmodelparameters.md) | :heavy_minus_sign:                                                                                             | Model Parameters: Not all parameters apply to every model                                                      |
| `provider`                                                                                                     | [operations.CreatePromptVersionProvider](../../models/operations/createpromptversionprovider.md)               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `version`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `messages`                                                                                                     | [operations.CreatePromptVersionMessages](../../models/operations/createpromptversionmessages.md)[]             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |