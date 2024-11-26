# ResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { ResponseBody2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "5752317d-1a6d-45b6-b8cf-2820bf910560",
  createdById: "7fe8a542-8175-4c6e-a3e9-184ba16e6b1d",
  displayName: "Una_Runte",
  updatedById: "5066d3b0-ea64-4296-bbe4-a6095071a88e",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "0153986c-bb80-4677-80a4-08e009801d71",
      displayName: "Leopold_Balistreri3",
      updatedById: "22c1272b-7e0d-42e5-b80b-3ea442c74fc9",
      promptConfig: {
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
      metadata: {},
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  key: "<key>",
  type: "snippet",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `owner`                                                                                                            | *operations.ResponseBodyOwner*                                                                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `domainId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `promptConfig`                                                                                                     | [operations.UpdatePromptResponseBodyPromptConfig](../../models/operations/updatepromptresponsebodypromptconfig.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | [operations.UpdatePromptResponseBodyMetadata](../../models/operations/updatepromptresponsebodymetadata.md)         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `created`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was created                                                                         |
| `updated`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time the resource was last updated                                                                    |
| `versions`                                                                                                         | [operations.ResponseBodyVersions](../../models/operations/responsebodyversions.md)[]                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.UpdatePromptResponseBodyType](../../models/operations/updatepromptresponsebodytype.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |