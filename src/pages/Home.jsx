// src/pages/Home.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import CountryCard from "../components/CountryCard.jsx";
import Spinner from "../components/Spinner.jsx";
import { searchCountries } from "../api/countries.js";

export default function Home() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const canSearch = useMemo(() => q.trim().length >= 2, [q]);

  async function runSearch() {
    if (!canSearch) return;
    try {
      setPending(true);
      setError("");
      const data = await searchCountries(q.trim());
      setResults(Array.isArray(data) ? data.slice(0, 24) : []);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  // Debounced fetch while typing (for suggestions + grid)
  useEffect(() => {
    const t = setTimeout(() => {
      runSearch();
    }, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  // Build suggestion list for the popover
  const suggestions = useMemo(() => {
    if (!Array.isArray(results)) return [];
    // show top 8 suggestions by common name
    return results.slice(0, 8).map((c) => ({
      label: c?.name?.common ?? "",
      code: c?.cca2 ?? c?.cca3 ?? "",
    }));
  }, [results]);

  function handleSelectSuggestion(item) {
    if (item?.code) {
      navigate(`/country/${item.code}`);
    } else if (item?.label) {
      setQ(item.label);
      runSearch();
    }
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Find a country, then view live weather</h1>

      <SearchBar
        value={q}
        onChange={setQ}
        onSubmit={runSearch}
        suggestions={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
      />

      {pending && <Spinner />}
      {error && <p className="text-red-600">{error}</p>}

      {/* Keep the grid results below as “full search results” */}
      {!pending && !error && results.length === 0 && (
        <p className="opacity-70">Try searching for “Nigeria”, “Japan”, “Canada”…</p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => (
          <CountryCard key={c.cca3 || c.cca2} c={c} />
        ))}
      </div>
    </section>
  );
}
