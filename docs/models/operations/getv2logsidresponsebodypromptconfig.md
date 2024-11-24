# GetV2LogsIdResponseBodyPromptConfig

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyPromptConfig = {
  stream: false,
  model: "Wrangler",
  modelDbId: "154686ac-20f5-492c-a6a9-c29e29f10309",
  modelType: "chat",
  modelParameters: {},
  provider: "google-ai",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://able-coordination.com",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                               | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `model`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `modelDbId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The id of the resource                                                                                                 |
| `modelType`                                                                                                            | [operations.GetV2LogsIdResponseBodyModelType](../../models/operations/getv2logsidresponsebodymodeltype.md)             | :heavy_check_mark:                                                                                                     | The type of the model                                                                                                  |
| `modelParameters`                                                                                                      | [operations.GetV2LogsIdResponseBodyModelParameters](../../models/operations/getv2logsidresponsebodymodelparameters.md) | :heavy_check_mark:                                                                                                     | Model Parameters: Not all parameters apply to every model                                                              |
| `provider`                                                                                                             | [operations.GetV2LogsIdResponseBodyProvider](../../models/operations/getv2logsidresponsebodyprovider.md)               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `messages`                                                                                                             | [operations.GetV2LogsIdResponseBodyMessages](../../models/operations/getv2logsidresponsebodymessages.md)[]             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `integrationId`                                                                                                        | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The id of the resource                                                                                                 |
| `version`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |