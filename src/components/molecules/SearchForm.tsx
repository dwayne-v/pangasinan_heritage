"use client";

import { FormEvent, useId, useState } from "react";
import { Button, Icon } from "@/components/atoms";

export interface SearchFormProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  hideLabel?: boolean;
}

/**
 * Molecules / SearchForm
 *
 * Pairs a labeled text input with the Button atom to let visitors
 * filter heritage sites by name or municipality (e.g. "Bolinao").
 * Lives at the top of the HeritageGrid organism.
 *
 * Accessibility: the input always has a programmatic <label> (visually
 * hidden by default), and the submit button carries an accessible
 * name even when only the search icon is visible on narrow screens.
 */
export default function SearchForm({
  onSearch,
  placeholder = "Search Hundred Islands, Bolinao Lighthouse...",
  hideLabel = true,
}: SearchFormProps) {
  const [query, setQuery] = useState("");
  const inputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="flex w-full max-w-xl items-stretch gap-2">
      <div className="flex-1">
        <label htmlFor={inputId} className={hideLabel ? "sr-only" : "mb-1 block text-sm font-medium"}>
          Search heritage sites
        </label>
        <input
          id={inputId}
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-sand-300 bg-white px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500 focus-visible:border-ocean-600"
        />
      </div>
      <Button type="submit" variant="primary" icon={<Icon name="search" />} aria-label="Search">
        <span className="hidden sm:inline">Search</span>
      </Button>
    </form>
  );
}
