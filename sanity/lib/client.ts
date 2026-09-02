import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "../env";

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

/** Run a GROQ query. Returns `null` if Sanity isn't connected yet. */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 }, // ISR: content updates appear within a minute
    });
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return null;
  }
}
