import { useMemo, useState } from "react";
import { FiHash, FiSearch, FiX } from "react-icons/fi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { words } from "./words";

function SearchFilter() {
    const [searchWord, setSearchWord] = useState("");

    const filteredWords = useMemo(() => {
        const query = searchWord.trim().toLowerCase();
        if (!query) return words;
        return words.filter((word) => word.toLowerCase().includes(query));
    }, [searchWord]);

    const clearSearch = () => setSearchWord("");

    return (
        <div id="top" className="page-shell">
            <Header />

            <main>
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">React UI playground</p>
                        <h1>Find the right word in a growing collection.</h1>
                        <p className="hero-text">
                            Search through a curated word list with a fast, focused interface
                            built for experimentation and reusable UI patterns.
                        </p>
                    </div>

                    <div className="hero-stat">
                        <FiHash />
                        <strong>{words.length}</strong>
                        <span>words to explore</span>
                    </div>
                </section>

                <section className="search-card" id="search" aria-labelledby="search-title">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Search the collection</p>
                            <h2 id="search-title">What are you looking for?</h2>
                        </div>
                        <span className="result-count">
                            {filteredWords.length} match{filteredWords.length === 1 ? "" : "es"}
                        </span>
                    </div>

                    <div className="search-field">
                        <FiSearch aria-hidden="true" />
                        <input
                            type="search"
                            value={searchWord}
                            onChange={(event) => setSearchWord(event.target.value)}
                            placeholder="Type a word to filter the list"
                            aria-label="Search words"
                        />
                        {searchWord ? (
                            <button
                                className="clear-button"
                                type="button"
                                onClick={clearSearch}
                                aria-label="Clear search"
                                title="Clear search"
                            >
                                <FiX />
                            </button>
                        ) : null}
                    </div>
                </section>

                <section className="results-section" id="results" aria-live="polite">
                    <div className="results-heading">
                        <div>
                            <p className="eyebrow">Browse results</p>
                            <h2>
                                {searchWord
                                    ? "Matches for \"" + searchWord + "\""
                                    : "All words"}
                            </h2>
                        </div>
                        <p className="results-note">Select a word to copy it.</p>
                    </div>

                    {filteredWords.length ? (
                        <div className="word-grid">
                            {filteredWords.map((word) => (
                                <button
                                    className="word-chip"
                                    type="button"
                                    key={word}
                                    onClick={() => navigator.clipboard?.writeText(word)}
                                    title="Copy word"
                                >
                                    <span>{word}</span>
                                    <FiHash aria-hidden="true" />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <FiSearch />
                            <h3>No matching words</h3>
                            <p>Try a shorter search term or clear the current filter.</p>
                            <button className="secondary-button" type="button" onClick={clearSearch}>
                                Clear search
                            </button>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}

export default SearchFilter;
