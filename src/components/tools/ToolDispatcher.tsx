"use client";

import React from "react";
import { EpisodeTitleGenerator } from "./EpisodeTitleGenerator";
import { ShowNotesGenerator } from "./ShowNotesGenerator";
import { PodcastNameGenerator } from "./PodcastNameGenerator";
import { EpisodeOutlineBuilder } from "./EpisodeOutlineBuilder";
import { GuestQuestionGenerator } from "./GuestQuestionGenerator";
import { MonetizationCalculator } from "./MonetizationCalculator";
import { CoverArtPreview } from "./CoverArtPreview";
import { RssFeedValidator } from "./RssFeedValidator";
import { EpisodeTimestampGenerator } from "./EpisodeTimestampGenerator";
import { IntroScriptGenerator } from "./IntroScriptGenerator";
import { DescriptionGenerator } from "./DescriptionGenerator";
import { CategoryFinder } from "./CategoryFinder";
import { TranscriptFormatter } from "./TranscriptFormatter";
import { HookGenerator } from "./HookGenerator";
import { TrailerScriptBuilder } from "./TrailerScriptBuilder";
import { AudienceGrowthEstimator } from "./AudienceGrowthEstimator";
import { ReviewResponseGenerator } from "./ReviewResponseGenerator";
import { CollabFinder } from "./CollabFinder";
import { LoudnessMeter } from "./LoudnessMeter";
import { ScriptTimer } from "./ScriptTimer";

import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface ToolDispatcherProps {
  slug: string;
  lang?: SupportedLocale;
}

export function ToolDispatcher({ slug, lang = defaultLocale }: ToolDispatcherProps) {
  const renderTool = () => {
    switch (slug) {
      case "episode-title-generator":
        return <EpisodeTitleGenerator lang={lang} />;
      case "show-notes-generator":
        return <ShowNotesGenerator lang={lang} />;
      case "podcast-name-generator":
        return <PodcastNameGenerator lang={lang} />;
      case "episode-outline-builder":
        return <EpisodeOutlineBuilder lang={lang} />;
      case "guest-question-generator":
        return <GuestQuestionGenerator lang={lang} />;
      case "monetization-calculator":
        return <MonetizationCalculator lang={lang} />;
      case "cover-art-preview":
        return <CoverArtPreview lang={lang} />;
      case "rss-feed-validator":
        return <RssFeedValidator lang={lang} />;
      case "episode-timestamp-generator":
        return <EpisodeTimestampGenerator lang={lang} />;
      case "intro-script-generator":
        return <IntroScriptGenerator lang={lang} />;
      case "description-generator":
        return <DescriptionGenerator lang={lang} />;
      case "category-finder":
        return <CategoryFinder lang={lang} />;
      case "transcript-formatter":
        return <TranscriptFormatter lang={lang} />;
      case "hook-generator":
        return <HookGenerator lang={lang} />;
      case "trailer-script-builder":
        return <TrailerScriptBuilder lang={lang} />;
      case "audience-growth-estimator":
        return <AudienceGrowthEstimator lang={lang} />;
      case "review-response-generator":
        return <ReviewResponseGenerator lang={lang} />;
      case "collab-finder":
        return <CollabFinder lang={lang} />;
      case "lufs-meter":
        return <LoudnessMeter lang={lang} />;
      case "script-timer":
        return <ScriptTimer lang={lang} />;
      default:
        return (
          <div className="p-8 text-center rounded-xl bg-studio-card border border-studio-border">
            <p className="text-sm font-semibold mb-1">Tool Not Found</p>
            <p className="text-xs text-neutral-500">The requested tool is unavailable.</p>
          </div>
        );
    }
  };

  return <div className="tool-workspace w-full">{renderTool()}</div>;
}
