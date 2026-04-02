import { NextResponse } from "next/server";

const PLACE_ID = process.env.GOOGLE_PLACE_ID || "";
const FIELDS = "name,rating,user_ratings_total,reviews";

// Simple in-memory cache (resets on cold start, which is fine)
let cache: { data: unknown; timestamp: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function GET() {
  if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(cache.data);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !PLACE_ID) {
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${FIELDS}&language=nl&key=${apiKey}`;
    // Plain fetch — no Next.js-specific options to avoid build errors
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.status !== "OK") throw new Error(json.status);

    const result = json.result;
    const reviews = (result.reviews || [])
      .sort((a: { time: number }, b: { time: number }) => b.time - a.time)
      .slice(0, 6);

    const data = {
      name: result.name,
      rating: result.rating,
      user_ratings_total: result.user_ratings_total,
      reviews,
    };
    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  } catch (err) {
    console.error("Places API error:", err);
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
