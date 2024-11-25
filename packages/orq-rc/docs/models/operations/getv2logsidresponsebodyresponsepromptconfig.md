# GetV2LogsIdResponseBodyResponsePromptConfig

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyResponsePromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyResponsePromptConfig = {
  stream: false,
  model: "Altima",
  modelDbId: "d4c1f83c-93aa-4fba-94c1-1293094a7d09",
  modelType: "tts",
  modelParameters: {},
  provider: "aws",
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
| `modelType`                                                                                                                            | [operations.GetV2LogsIdResponseBodyResponseModelType](../../models/operations/getv2logsidresponsebodyresponsemodeltype.md)             | :heavy_check_mark:                                                                                                                     | The type of the model                                                                                                                  |
| `modelParameters`                                                                                                                      | [operations.GetV2LogsIdResponseBodyResponseModelParameters](../../models/operations/getv2logsidresponsebodyresponsemodelparameters.md) | :heavy_check_mark:                                                                                                                     | Model Parameters: Not all parameters apply to every model                                                                              |
| `provider`                                                                                                                             | [operations.GetV2LogsIdResponseBodyResponseProvider](../../models/operations/getv2logsidresponsebodyresponseprovider.md)               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `messages`                                                                                                                             | [operations.GetV2LogsIdResponseBodyResponseMessages](../../models/operations/getv2logsidresponsebodyresponsemessages.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `integrationId`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The id of the resource                                                                                                                 |
| `version`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |