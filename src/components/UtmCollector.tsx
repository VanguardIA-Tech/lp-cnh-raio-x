"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function UtmCollector() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utms: { [key: string]: string } = {};
    let hasUtms = false;

    UTM_PARAMS.forEach(param => {
      const value = searchParams.get(param);
      if (value) {
        utms[param] = value;
        hasUtms = true;
      }
    });

    if (hasUtms) {
      try {
        sessionStorage.setItem("vanguardia_utms", JSON.stringify(utms));
      } catch (error) {
        console.error("Failed to save UTMs to sessionStorage", error);
      }
    }
  }, [searchParams]);

  return null;
}