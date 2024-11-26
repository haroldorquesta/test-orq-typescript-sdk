# ResponseBody2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { ResponseBody2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "d3b0ea64-296b-4e4a-8609-5071a88eeb94",
  createdById: "153986cb-b806-4770-aa40-8e009801d712",
  displayName: "Erna.Nicolas11",
  updatedById: "2c1272b7-e0d2-4e58-80b3-ea442c74fc9c",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "bfc9b740-a27a-4e93-a7a3-bc8d38ebc395",
      displayName: "Juana_Mosciski79",
      updatedById: "f62ec693-66c6-4cc6-b780-3dc1a082d91a",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: "<value>",
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