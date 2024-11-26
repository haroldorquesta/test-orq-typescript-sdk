# ResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { ResponseBody3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "881fb812-6581-4080-8060-6336156de449",
  createdById: "50618af3-3fd9-4d3d-8d38-eaa84f74b954",
  displayName: "Aric.Lakin5",
  updatedById: "b3402d3f-24d6-44b0-bed1-cf79a4a76ece",
  promptConfig: {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://firm-honesty.com",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "18937702-9fa1-4d61-8936-5a6138c0919d",
      displayName: "Jeromy90",
      updatedById: "bd878b61-2f0b-4f2b-943d-e5a2ce5ae0d9",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://lucky-tenant.biz",
                },
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
  type: "template",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `owner`                                                                                                                          | *operations.UpdatePromptResponseBodyOwner*                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `domainId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `createdById`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedById`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `promptConfig`                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsPromptConfig](../../models/operations/updatepromptresponsebodypromptspromptconfig.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `metadata`                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsMetadata](../../models/operations/updatepromptresponsebodypromptsmetadata.md)         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `created`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The date and time the resource was created                                                                                       |
| `updated`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The date and time the resource was last updated                                                                                  |
| `versions`                                                                                                                       | [operations.UpdatePromptResponseBodyVersions](../../models/operations/updatepromptresponsebodyversions.md)[]                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.UpdatePromptResponseBodyPromptsType](../../models/operations/updatepromptresponsebodypromptstype.md)                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |