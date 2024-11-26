# ResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ResponseBodyVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyVersions = {
  id: "<id>",
  createdById: "5a565752-317d-41a6-8d5b-68cf2820bf91",
  displayName: "Emelie46",
  updatedById: "e8a54281-75c6-4e3e-a918-4ba16e6b1d8f",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://helpless-appliance.info",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `displayName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `promptConfig`                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponsePromptConfig](../../models/operations/updatepromptresponsebodypromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `metadata`                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponseMetadata](../../models/operations/updatepromptresponsebodypromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `commit`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `timestamp`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |