import type { LegalSection } from "@/legal";

function Body({ body }: { body: LegalSection["body"] }) {
  if (Array.isArray(body)) {
    return (
      <>
        {body.map((p, i) => (
          <p key={i} style={{ whiteSpace: "pre-line" }}>
            {p}
          </p>
        ))}
      </>
    );
  }
  return (
    <>
      {body.before?.map((p, i) => <p key={`b${i}`}>{p}</p>)}
      <ul>
        {body.list.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
      {body.after?.map((p, i) => <p key={`a${i}`}>{p}</p>)}
    </>
  );
}

export default function LegalDoc({
  title,
  intro,
  sections,
  lastUpdated,
  legalName,
  isDraft,
  draftNote,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  lastUpdated: string;
  legalName: string;
  isDraft: boolean;
  draftNote: string;
}) {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="inner">
            <span className="eyebrow">Legal</span>
            <h1>{title}</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap legal">
          <p className="metaline">
            {legalName} · Last updated: {lastUpdated}
          </p>
          {isDraft ? <span className="draftnote">{draftNote}</span> : null}
          <p className="lead-intro">{intro}</p>
          {sections.map((s, i) => (
            <div key={s.id}>
              <h2 id={s.id}>
                {i + 1}. {s.title}
              </h2>
              <Body body={s.body} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
