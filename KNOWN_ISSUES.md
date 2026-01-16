# Known Issues and Recommendations

## Data Quality Issues (From Source HTML)

These issues exist in the source `index.html` and are accurately reflected in the extracted data:

### 1. Grammar/Spelling Issues
- Line 16: "an Pro Fullstack Web and Mobile enginner.." 
  - Should be: "a Pro Fullstack Web and Mobile engineer."
- Line 117: Several French spelling issues in project description
  - "taches" → "tâches"
  - "managée" → "managées"  
  - "lista" → "listes"
  - "entrain" → "en train"

### 2. Date Logic Error
- Line 88: Certification dates "Mai 2023 - Juillet 2022" are chronologically backwards
  - Recommend correcting in source HTML

**Note**: These issues should be fixed in `index.html`, then re-run the extraction script to update `profile-data.json`.

## Technical Recommendations (Non-Critical)

### 1. HTML Parser Library
**Current**: Uses regex-based parsing  
**Suggestion**: Consider using `jsdom` or `cheerio` for more robust HTML parsing  
**Impact**: Low - current approach works for the existing HTML structure  
**Effort**: Medium - would require refactoring extraction logic

### 2. Magic Strings
**Current**: Hardcoded strings like 'data-typed-items'  
**Suggestion**: Define as constants at top of file  
**Impact**: Low - improves maintainability  
**Effort**: Low

### 3. Dynamic Date Filtering
**Current**: Hardcoded years for "recent" experience filtering  
**Suggestion**: Calculate dynamically based on current date  
**Impact**: Low - filtering works but needs annual updates  
**Effort**: Low

## Fixing Data Quality Issues

To correct the source data issues:

1. Edit `index.html`:
```html
<!-- Line 76: Fix grammar -->
<p>I'm a software engineer specializing in building (and occasionally designing) 
exceptional digital experiences. Currently, I'm focused to be a Pro Fullstack Web 
and Mobile engineer.</p>

<!-- Line 269: Fix date order -->
<h5>Mai 2022 - Juillet 2023</h5>

<!-- Line 299: Fix French spelling -->
<li>Projet: j'ai développé une application similaire à TRELLO qui gère les 
tâches à faire et les managées par une équipe de travail, sous forme des 
espaces de travail qui contient des listes et chaque liste avoir des cartes 
(à faire, en train, terminée)</li>
```

2. Re-run extraction:
```bash
node extract-profile-data.js
```

3. Verify updates:
```bash
node example-usage.js
```

## Priority

- **High**: Fix date logic error (breaks chronological order)
- **Medium**: Fix grammar/spelling (improves professionalism)
- **Low**: Technical improvements (optional enhancements)

## Status

✅ Extraction system working correctly  
✅ All data sections captured  
⚠️ Source data quality issues identified  
💡 Optional technical improvements suggested  

These issues do not affect the functionality of the extraction system. The system correctly extracts and structures all content from the HTML files as requested.
