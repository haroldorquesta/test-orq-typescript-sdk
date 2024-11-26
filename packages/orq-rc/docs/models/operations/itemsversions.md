# ItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ItemsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsVersions = {
  id: "<id>",
  createdById: "7f4074d3-4cb8-4b60-a081-0fd20f42b14f",
  displayName: "Jovan96",
  updatedById: "90be851c-e1c0-4f98-94e4-dfc817736527",
  promptConfig: {
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `createdById`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `displayName`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `updatedById`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `description`                                                                                                                                                        | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                       | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponsePromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `metadata`                                                                                                                                                           | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseMetadata](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsemetadata.md)         | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `commit`                                                                                                                                                             | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `timestamp`                                                                                                                                                          | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |