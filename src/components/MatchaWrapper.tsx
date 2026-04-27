"use client";

import dynamic from "next/dynamic";

const MatchaExperience = dynamic(() => import("./MatchaExperience"), {
  ssr: false,
});

export default function MatchaWrapper() {
  return <MatchaExperience />;
}
