# GetAllPromptsItems3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "47b85282-f82b-41c7-a20f-4f881fb81265",
  createdById: "10800606-3361-456d-be44-9250618af33f",
  displayName: "Lewis_Ebert86",
  updatedById: "8eaa84f7-4b95-4431-ba83-00b3402d3f24",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "b0ed1cf7-9a4a-476e-9ced-09ba46018937",
      displayName: "Aditya_Muller65",
      updatedById: "d619365a-6138-4c09-a19d-37c22ebbd878",
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
  type: "template",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `owner`                                                                                                                              | *operations.GetAllPromptsItemsPromptsResponseOwner*                                                                                  | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `domainId`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `displayName`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `promptConfig`                                                                                                                       | [operations.GetAllPromptsItemsPromptsResponsePromptConfig](../../models/operations/getallpromptsitemspromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `metadata`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseMetadata](../../models/operations/getallpromptsitemspromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `created`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was created                                                                                           |
| `updated`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was last updated                                                                                      |
| `versions`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseVersions](../../models/operations/getallpromptsitemspromptsresponseversions.md)[]       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponseType](../../models/operations/getallpromptsitemspromptsresponsetype.md)                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |