# FindOnePromptSnippetResponseBody3

Prompt template model returned from the API

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBody3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: FindOnePromptSnippetResponseBody3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "0cf0ec5e-461a-407a-8d2c-b89196d596e4",
  createdById: "b690fe90-6fa2-47f8-a094-168088c68be6",
  displayName: "Maude.Schmidt",
  updatedById: "bb3ad3ca-f424-44cb-ba3d-f8a84453ed75",
  promptConfig: {
    messages: [
      {
        role: "assistant",
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
      createdById: "39a9dfc7-d1a8-42f5-a9e8-1d5fed5cf870",
      displayName: "Ryann_Halvorson7",
      updatedById: "6467ff2e-1825-4b6c-8bf8-c5566181e074",
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
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "template",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `owner`                                                                                                                                                                        | *operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseOwner*                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `domainId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `createdById`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `displayName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updatedById`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `description`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `promptConfig`                                                                                                                                                                 | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponsePromptConfig](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `metadata`                                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseMetadata](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `created`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | The date and time the resource was created                                                                                                                                     |
| `updated`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | The date and time the resource was last updated                                                                                                                                |
| `versions`                                                                                                                                                                     | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseVersions](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponseversions.md)[]       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `type`                                                                                                                                                                         | [operations.FindOnePromptSnippetResponseBodyPromptSnippetsResponseType](../../models/operations/findonepromptsnippetresponsebodypromptsnippetsresponsetype.md)                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |