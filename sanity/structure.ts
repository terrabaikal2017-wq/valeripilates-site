import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("VALERI")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("classType").title("Classes"),
      S.documentTypeListItem("instructor").title("Team"),
      S.documentTypeListItem("memberStory").title("People of VALERI"),
      S.documentTypeListItem("event").title("What’s Happening"),
      S.documentTypeListItem("socialPost").title("Lately at VALERI"),
      S.divider(),
      S.documentTypeListItem("legalPage").title("Legal"),
    ]);
