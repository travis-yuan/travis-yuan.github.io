#!/usr/bin/env python3
"""Fetch Google Scholar metrics via SerpAPI and write assets/data/metrics.json.

Runs locally or in GitHub Actions. stdlib-only (no pip install needed).

Env:
  SERPAPI_KEY   SerpAPI API key (required)
  METRICS_OUT   output path (default: assets/data/metrics.json)
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone

SCHOLAR_ID = "NmS1SPEAAAAJ"
API_KEY = os.environ.get("SERPAPI_KEY", "").strip()
OUT = os.environ.get("METRICS_OUT", "assets/data/metrics.json")


def main():
    if not API_KEY:
        print("ERROR: SERPAPI_KEY is not set", file=sys.stderr)
        sys.exit(1)

    params = urllib.parse.urlencode({
        "engine": "google_scholar_author",
        "author_id": SCHOLAR_ID,
        "api_key": API_KEY,
        "hl": "en",
    })
    url = "https://serpapi.com/search.json?" + params

    with urllib.request.urlopen(url, timeout=90) as resp:
        data = json.load(resp)

    table = (data.get("cited_by") or {}).get("table") or []

    def row_for(key):
        for row in table:
            if isinstance(row, dict) and key in row:
                return row[key] or {}
        return {}

    def since(d):
        for k, v in d.items():
            if k.startswith("since_"):
                return v
        return None

    c = row_for("citations")
    h = row_for("h_index")
    i = row_for("i10_index")

    metrics = {
        "citations": c.get("all"),
        "h_index": h.get("all"),
        "i10_index": i.get("all"),
        "citations_since": since(c),
        "h_index_since": since(h),
        "i10_index_since": since(i),
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "source": "Google Scholar (via SerpAPI)",
        "profile_url": "https://scholar.google.com/citations?user=%s&hl=en" % SCHOLAR_ID,
    }

    if metrics["h_index"] is None:
        print("WARNING: could not parse h-index; raw cited_by:", file=sys.stderr)
        print(json.dumps(data.get("cited_by"), ensure_ascii=False)[:800], file=sys.stderr)

    os.makedirs(os.path.dirname(OUT) or ".", exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(metrics, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("Wrote metrics:", json.dumps(metrics, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
