# ResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { ResponseBody3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "d64b0ed1-cf79-4a4a-a76e-ced09ba46018",
  createdById: "377029fa-1d61-4936-85a6-138c0919d37c",
  displayName: "Candace_Powlowski",
  updatedById: "78b612f0-bf2b-443d-ae5a-2ce5ae0d968d",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "e31ab944-9475-4833-9b63-d61b499f34eb",
      displayName: "Murphy.Jast52",
      updatedById: "a6dc29b8-1865-4953-9b3c-f7c2cf842e57",
      promptConfig: {
        messages: [
          {
            role: "exception",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://well-worn-cope.name",
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