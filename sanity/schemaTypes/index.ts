import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { instructor } from "./instructor";
import { memberStory } from "./memberStory";
import { event } from "./event";
import { socialPost } from "./socialPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, instructor, memberStory, event, socialPost],
};
