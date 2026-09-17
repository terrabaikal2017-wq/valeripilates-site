import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { instructor } from "./instructor";
import { memberStory } from "./memberStory";
import { event } from "./event";
import { socialPost } from "./socialPost";
import { classType } from "./classType";
import { legalPage } from "./legalPage";
import { plan, faqItem, visitStep, legalSection, scheduleNote } from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    classType,
    instructor,
    memberStory,
    event,
    socialPost,
    legalPage,
    plan,
    faqItem,
    visitStep,
    legalSection,
    scheduleNote,
  ],
};
