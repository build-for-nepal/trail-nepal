import { useState, useEffect } from "react";
import { TrekRouteCollection } from "@/types/trek";

export function useTrekkingData(trekId?: string) {
  const [data, setData] = useState<TrekRouteCollection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If no trekId is provided yet, don't fetch
    if (!trekId) return;

    const controller = new AbortController();

    async function fetchRoute() {
      try {
        setIsLoading(true);
        setError(null);

        // Dynamically fetch based on the trekId slug!
        const res = await fetch(`/data/${trekId}.geojson`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`Failed to fetch route for ${trekId}`);

        const geojson = (await res.json()) as TrekRouteCollection;
        setData(geojson);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError(err);
        console.error("Error loading map data:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRoute();

    return () => controller.abort();
  }, [trekId]);

  return { data, isLoading, error };
}
