# GetAllPromptsItems2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "336156de-4492-4506-b18a-f33fd9d3dd38",
  createdById: "aa84f74b-9543-41a8-9300-b3402d3f24d6",
  displayName: "Matilda8",
  updatedById: "f79a4a76-eced-409b-8a46-0189377029fa",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "19365a61-38c0-4919-8d37-c22ebbd878b6",
      displayName: "Brice12",
      updatedById: "43de5a2c-e5ae-40d9-968d-b87e31ab9449",
      promptConfig: {
        messages: [
          {
            role: "exception",
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