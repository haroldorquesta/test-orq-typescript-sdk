# GetAllPromptsItems3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "ca78ee2d-814a-4e19-aa4c-130841e3949a",
  createdById: "40dfe1c7-a98a-4992-adcf-c9ea429bd4e9",
  displayName: "Raheem89",
  updatedById: "67b0538c-2f7c-457f-9b03-4fca1c22d01e",
  promptConfig: {
    messages: [
      {
        role: "correction",
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
      createdById: "c3b68f44-459c-4e0a-899c-fb2fd41cf2a0",
      displayName: "Ozella77",
      updatedById: "4c37ba8a-0431-43de-b877-ff310563edb7",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
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