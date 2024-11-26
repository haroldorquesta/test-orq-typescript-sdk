# GetAllPromptsItems2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "ae4d7acb-cace-4e5f-9097-3818d25a5657",
  createdById: "2317d1a6-d5b6-48cf-b282-0bf910560d7f",
  displayName: "Jevon.Haley",
  updatedById: "175c6e3e-9184-4ba1-96e6-b1d8f8cfb950",
  promptConfig: {
    messages: [
      {
        role: "exception",
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
      createdById: "b0ea6429-6be4-4a60-9950-71a88eeb9401",
      displayName: "Clifford80",
      updatedById: "b806770a-408e-4009-b801-d712950a0122",
      promptConfig: {
        messages: [
          {
            role: "system",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `owner`                                                                                                              | *operations.GetAllPromptsItemsPromptsOwner*                                                                          | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `domainId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `promptConfig`                                                                                                       | [operations.GetAllPromptsItemsPromptsPromptConfig](../../models/operations/getallpromptsitemspromptspromptconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | [operations.GetAllPromptsItemsPromptsMetadata](../../models/operations/getallpromptsitemspromptsmetadata.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `created`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was created                                                                           |
| `updated`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was last updated                                                                      |
| `versions`                                                                                                           | [operations.GetAllPromptsItemsPromptsVersions](../../models/operations/getallpromptsitemspromptsversions.md)[]       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `key`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.GetAllPromptsItemsPromptsType](../../models/operations/getallpromptsitemspromptstype.md)                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |