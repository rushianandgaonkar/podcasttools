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
        return <ShowNotesGenerator />;
      case "podcast-name-generator":
        return <PodcastNameGenerator />;
      case "episode-outline-builder":
        return <EpisodeOutlineBuilder />;
      case "guest-question-generator":
        return <GuestQuestionGenerator lang={lang} />;
      case "monetization-calculator":
        return <MonetizationCalculator lang={lang} />;
      case "cover-art-preview":
        return <CoverArtPreview />;
      case "rss-feed-validator":
        return <RssFeedValidator />;
      case "episode-timestamp-generator":
        return <EpisodeTimestampGenerator />;
      case "intro-script-generator":
        return <IntroScriptGenerator />;
      case "description-generator":
        return <DescriptionGenerator />;
      case "category-finder":
        return <CategoryFinder />;
      case "transcript-formatter":
        return <TranscriptFormatter />;
      case "hook-generator":
        return <HookGenerator />;
      case "trailer-script-builder":
        return <TrailerScriptBuilder />;
      case "audience-growth-estimator":
        return <AudienceGrowthEstimator />;
      case "review-response-generator":
        return <ReviewResponseGenerator />;
      case "collab-finder":
        return <CollabFinder />;
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
