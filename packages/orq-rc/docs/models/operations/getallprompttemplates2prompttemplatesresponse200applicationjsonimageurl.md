# GetAllPromptTemplates2PromptTemplatesResponse200ApplicationJSONImageUrl

## Example Usage

```typescript
import { GetAllPromptTemplates2PromptTemplatesResponse200ApplicationJSONImageUrl } from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  GetAllPromptTemplates2PromptTemplatesResponse200ApplicationJSONImageUrl = {
    url: "https://worst-guidance.name",
  };
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |