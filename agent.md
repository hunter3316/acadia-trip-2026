# 2026 Acadia & Vermont Trip - Agent Prompt / Context

## Purpose

You are assisting the user (and their family) in planning and maintaining a vacation itinerary for **June 6 to June 20, 2026**. This is an ongoing, living project. Your role is to:

1. Synthesize new information as it arrives (daily plans, activity details, restaurant picks, new bookings, etc.).
2. Update the relevant informational markdown files in this workspace.
3. Update the live trip website (`trip-webapp/`) to reflect the changes.
4. Deploy those changes to GitHub so the site goes live automatically.

**All four steps should happen autonomously in a single pass whenever the user provides new trip information.**

## Current Trip Status: FULLY CEMENTED ✅

The entire itinerary is now booked and confirmed. No TBD blocks remain. The project is now in **maintenance & enrichment mode** — the user will provide day-by-day activity plans, restaurant reservations, packing updates, and other details over the coming weeks.

### Confirmed Schedule

| Part | Dates | Location | Status |
|------|-------|----------|--------|
| 1. Vermont Intercept | June 6–7 | Cambridge, VT (Cady Hill Meadow) | ✅ Cemented |
| 2. Acadia Oceanside | June 8–12 | Bar Harbor KOA (Res. #21555510) | ✅ Booked |
| 3. Schoodic Peninsula | June 12–13 | Schoodic Woods NPS (Res. #0846047182-1, Site B32) | ✅ Booked |
| 4. The Moose Quest | June 13–15 | Moose Creek RV Resort, Greenville (Res. #9644, Site 112) | ✅ Booked |
| 5. Return to the Meadow | June 15–20 | Cambridge, VT (Cady Hill Meadow) | ✅ Cemented |
| 6. The Disconnect | June 20 | Wilton, NY → WV | ✅ Cemented |

### RV Rental

* **Unit:** 2025 Coachmen RV Freedom Express Select 29SE
* **RVShare Reservation:** #12076232 — $2,807.42
* **Pickup:** June 6 @ 4:00 PM — Brandon's XL Bunkhouse, 13 Burnham Rd, Wilton, NY 12831
* **Dropoff:** June 20 @ 11:00 AM — Wilton, NY

## Trip Overview

* **Dates:** June 6, 2026 – June 20, 2026
* **Party:** 6 people total (5 Adults, one 13-year-old child) + 1 Golden Retriever.
* **Starting & Ending Point:** Morgantown, WV
* **Destinations:**
  1. **Cambridge, VT:** Staying with Erica's family. RV parked in their meadow. (~9 nights total across two visits)
  2. **Acadia National Park, ME:** 4 nights at Oceanside KOA (June 8–12).
  3. **Schoodic Peninsula, ME:** 1 night at Schoodic Woods NPS (June 12–13).
  4. **Moosehead Lake / Greenville, ME:** 2 nights at Moose Creek RV Resort (June 13–15). Moose photography basecamp.

---

## Ongoing Updates Workflow

The user will periodically provide new trip information — for example, detailed day plans ("Here's what we're doing on June 9"), restaurant reservations, tour bookings, packing list updates, or changes to the itinerary. When this happens, follow this procedure **autonomously and completely**:

### Step 1: Update Informational Files

Determine which workspace markdown files are affected and update them:

| Type of Update | File(s) to Modify |
|---|---|
| Day-by-day activity plans | `Official 2026 Itinerary.md` — add detailed day plans under the appropriate Part section |
| New bookings or reservation changes | `Official 2026 Itinerary.md` (reservation table), `Trip ToDo List.md` (move items to ✅ DONE) |
| Packing or prep changes | `Trip ToDo List.md` |
| New research or tips | `Acadia NPS Research Summary.md`, `Key mistakes to not make.md`, `top 10 things to do in acadia.md`, or create a new file if needed |
| Photography / moose planning | `Informatinoal_files/Moose photography deep-research-report (2).md` |
| Logistics or timing changes | `2026-Specific-Logistics.md` |

If the update doesn't fit cleanly into an existing file, create a new markdown file in the workspace root with a descriptive name.

### Step 2: Update the Website

Modify the relevant sections of `trip-webapp/index.html` (and `style.css` / `script.js` if needed) to reflect the new information. Common updates include:

* **Itinerary tab**: Add or expand day-level detail cards within the timeline.
* **Activities tab**: Add new activity cards with images, descriptions, and metadata tags.
* **Campsite tab**: Update reservation details or add new info cards.
* **To-Do tab**: Sync completed items, add new items.
* **Wildlife / Moose Guide / Explore / Pro Tips tabs**: Add content as appropriate.

When adding day-level detail to the Itinerary tab, expand the existing timeline cards with sub-day plans (morning, afternoon, evening activities) so family members can see exactly what's planned each day.

### Step 3: Deploy to GitHub

After making changes, deploy to **both branches** using this exact workflow:

```powershell
# 1. Commit and push changes on main
git add -A
git commit -m "<descriptive message about what changed>"
git push origin main

# 2. Deploy to gh-pages
git checkout gh-pages
git checkout main -- trip-webapp/index.html trip-webapp/script.js trip-webapp/style.css trip-webapp/assets/
Copy-Item trip-webapp\* . -Recurse -Force
Remove-Item trip-webapp -Recurse -Force
git add -A
git commit -m "Deploy: <same descriptive message>"
git push origin gh-pages

# 3. Return to main
git checkout main
```

### Step 4: Confirm

Tell the user what files were updated, what webapp sections changed, and confirm the deploy succeeded. If any git step fails, investigate and fix autonomously; escalate only if authentication or remote access is the issue.

---

## Web Application & Deployment

### Live Site
**URL:** https://hunter3316.github.io/acadia-trip-2026/

### Repository
**GitHub:** https://github.com/hunter3316/acadia-trip-2026

### Architecture
- **Branch `main`:** Full project — docs, research files, reservation PDFs, and the webapp source in `trip-webapp/`.
- **Branch `gh-pages`:** Deployment branch for GitHub Pages. Contains only the webapp files at the root (`index.html`, `script.js`, `style.css`, `assets/`).

### Webapp Features
- **Passcode:** 3316 (unlocks the app)
- **Tabs:** Itinerary, Route, To-Do, Activities, Wildlife, 🦌 Moose Guide, Campsite, Our RV, Explore, Pro Tips
- **Tech:** Vanilla HTML5/CSS3/JS, offline-ready, localStorage for todo persistence
- **Assets:** `trip-webapp/assets/` — hero images for each section, RV photos, reservation PDFs

---

## Constraints & Preferences

### RV Rental & Towing

* **Tow Vehicle:** 2021 Chevy Suburban, 4WD, 5.3L V8.
* **Towing Capacity:** 8,100 lbs.
* **Trailer Weight Limit:** Must be under 8,000 lbs. (7,000 lbs is ideal; 6,000 lbs is great).
* **RV Features:** Slide-outs are highly desirable for comfort (due to the size of the party), but not strictly mandatory. Newer, decent-condition RVs are strongly preferred. Must accommodate 6 people + 1 large dog.
* **Budget:** Aim for **<$200/day** for the RV rental cost, and **<$200/day** for each campsite. Budget is flexible but we want to remain budget-conscious.
* **Logistics:** We want to minimize towing distance and time to save on gas and driving fatigue. Do not plan to tow the RV all the way from Morgantown, WV. Keep the towing time to a minimum.

### Campground Preferences (Acadia)

* Must accommodate the selected RV.
* **Hookups:** Electric and water are mandatory. Septic/sewer is highly desirable but can be sacrificed for a significantly better campground experience.

---

## Workspace Files Context

This folder contains all project files. Use them as context and update them as needed:

### Core Planning Files

| File | Description |
|------|-------------|
| `agent.md` | **This file.** Agent context prompt with project directives, status, and workflows. |
| `Official 2026 Itinerary.md` | The canonical day-by-day schedule with all reservation numbers and costs. **Primary file to update with new day plans.** |
| `Trip ToDo List.md` | Comprehensive categorized to-do list (urgent → packing). Sync with webapp To-Do tab. |
| `2026-Specific-Logistics.md` | Date-specific logistics: solar times, tide predictions, reservation timeline checkpoints. |

### Research & Reference Files

| File | Description |
|------|-------------|
| `Deep reserach on acadia vacation.md` | Massive operational blueprint covering Acadia topographical limitations, campground analysis, Island Explorer logistics, photography timings, lupine bloom, Puffin tours, dog restrictions, dining, and black fly mitigation. |
| `Acadia NPS Research Summary.md` | Synthesized critical constraints from nps.gov/acad: hookup limitations, reservation timelines, Cadillac vehicle reservations, dog/Bark Ranger policies, entrance fees, photography spots, tide pooling. |
| `Key mistakes to not make.md` | Tips to avoid common Acadia pitfalls (from video notes). |
| `top 10 things to do in acadia.md` | Top 10 Acadia attractions from a former park ranger (from video notes). |

### Historical / Superseded Files

| File | Description |
|------|-------------|
| `trip options.md` | Early-stage driving-time estimates and RV listing links. Largely superseded by final bookings. |
| `Vacation Itinerary Options.md` | Three candidate itinerary options (Acadia First, Sandwich, NY Intercept). Superseded — final itinerary is Option 2 hybrid. |
| `Booking-Availability-Report.md` | Booking status and direct links from the research phase. All bookings now confirmed. |

### Informational Files (`Informatinoal_files/`)

| File | Description |
|------|-------------|
| `KOA rental acadia 2026.md` / `.pdf` | KOA reservation confirmation details. |
| `Moose photography deep-research-report (2).md` | Detailed moose photography field guide — locations (Lazy Tom Bog, Kokadjo, Prong Pond, Lily Bay, West Shirley Bog), timing, techniques, gear. Powers the 🦌 Moose Guide webapp tab. |
| `RVshare trailer rental acadia trip 2026 email.md` / `.pdf` | RVShare booking confirmation email. |
| `receipt for rvshare main trip 2026.md` / `.pdf` | RVShare payment receipt. |
| `rv share recept 2.pdf` | Second RVShare receipt. |
| `insurence for rvshare main trip 2026.pdf` | RVShare insurance documentation. |
| `Moose creek reservation june 13-15.pdf` | Moose Creek RV Resort confirmation. |
| `scoodic woods reservation jun12-13.pdf` | Schoodic Woods NPS reservation confirmation. |
| `preview (moose viewing directions).html` | HTML preview of moose viewing directions/map. |

### Webapp Files (`trip-webapp/`)

| File | Description |
|------|-------------|
| `index.html` | Main webapp — all 10 tabs rendered in a single-page app (~1,567 lines). |
| `style.css` | All styling — glassmorphism, dark theme, responsive layout (~40 KB). |
| `script.js` | Passcode logic, tab switching, localStorage for to-do, RV gallery, clipboard. |
| `assets/` | 21 files: hero images (`.png`), RV photos (`.webp`), reservation PDFs, floorplan. |

### Utility Files (`scripts/`)

| File | Description |
|------|-------------|
| `download_rv_images.ps1` | PowerShell script to download RV listing images. |
| `extract_pdfs.py` / `_plumber.py` / `_pymupdf.py` | Python scripts for extracting text from reservation PDFs. |

### Other Directories

| Directory | Description |
|-----------|-------------|
| `assets/` | Root-level assets directory (currently empty). |
| `.git/` | Git repository metadata. Branches: `main` (working), `gh-pages` (deployment). |

---

## Agent Directives

* Always reference the constraints (especially trailer weight < 8000 lbs and party size of 6 + dog) when suggesting RVs or campsites.
* When evaluating routes, consider the impact on towing time and driver fatigue.
* Suggest budget-friendly yet comfortable options, sticking to the <$200/day RV rental and <$200/day campsite budget baselines where possible.
* **When the user provides new trip details (day plans, bookings, etc.), follow the full Ongoing Updates Workflow above: update info files → update webapp → deploy to GitHub → confirm.**
* Keep `Official 2026 Itinerary.md` and `Trip ToDo List.md` as the primary living documents.
* **When updating the webapp**, always deploy to BOTH `main` and `gh-pages` branches (see Deployment Workflow above).
* If you notice stale, contradictory, or incomplete information in any file, fix it proactively and note what you corrected.

---

## Preferences & Trip Logistics

### General Flow & Dates

* **Split:** ~2 days in Cambridge VT before Acadia, 4 days at Acadia KOA, 1 night Schoodic, 2 nights Moosehead Lake for moose photography, then 5 nights back in Cambridge VT before returning home.
* **Crowd Mitigation:** We strongly prefer avoiding mid-June weekend crowds in Acadia. Because Acadia gets significantly busier as mid-June approaches, front-loading the Acadia portion of the trip to occur *earlier* in the June 6-21 window is highly desirable.

### Physical Activity Level

* The group (5 adults, one 13-year-old) is highly mobile with good stamina, but not looking for high-intensity or "crazy" extreme hikes (no vertical rock scrambles).
* **Ideal Hike:** Relaxed, scenic trails (a couple of miles at most per hike) to maximize wilderness enjoyment without being overly strenuous.

### Dog Regulations & Group Splitting

* **Do not limit the itinerary based solely on the dog.**
* The rented RV will have A/C, and the dog is kennel-acclimated and completely fine being left alone in the RV for a half-day (e.g., during the 4+ hour whale/puffin tours, which the whole family wants to experience together).
* If absolutely necessary, a family member could stay behind, but it is unlikely to be an issue.
* The family is highly flexible and open to breaking into smaller groups on certain days (e.g., the two photographers splitting off for specific shoots while others hike or relax).

### Driving, Towing, & Campsites

* **Driver:** The primary driver is extremely comfortable navigating tight, winding roads and backing the RV into tight campsites. **Pull-through sites are not necessary.**
* **Mobility:** Re-hitching and unhitching the Suburban from the trailer to go on sight-seeing drives around the island is expected and perfectly fine.

### Dining

* The group plans to bring most of their own food to prepare and eat at the RV to remain budget-conscious.
* However, integrating a few interesting, iconic local restaurants (e.g., Maine seafood) into the itinerary is welcomed and desired.

### Photography Targets

* There are two dedicated wildlife and landscape photographers in the family.
* **Targets:** Acadia coastline, sunrise/sunset, Puffins, Loons, Whales, Moose, and marine life.
* **Camp Vistas:** Strongly desire camping right on the water/ocean for immediate access to tide pools and beautiful vistas (cliffs overlooking the ocean). Moving the RV a few times to get these prime spots is fully approved.
* **Moose Photography:** A detailed field guide is available in the Moose Guide tab of the webapp and in `Informatinoal_files/Moose photography deep-research-report (2).md`. Priority locations: Lazy Tom Bog (#1), Kokadjo (#2), Prong Pond (#3), Lily Bay State Park (#4), West Shirley Bog (#5).

---

## Remaining To-Do Items

- [ ] **Book Cadillac Summit Vehicle Reservation:** 30% open 90 days out (March 2026), 70% open 2 days prior at 10 AM EST via Recreation.gov.
- [ ] **Book Puffin & Whale Watch Tour:** Bar Harbor Whale Watch Co. — book early before June spots sell out.
- [ ] **Pack black fly gear:** Head nets, DEET repellent, long sleeves, lightweight gloves — essential for moose photography sessions.
- [ ] **Camera prep for moose photography:** Window-mounted beanbag, extra batteries, large memory cards, 100-500mm or 150-600mm lens.
