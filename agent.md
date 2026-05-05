# 2026 Acadia & Vermont Trip - Agent Prompt / Context

## Purpose

You are assisting the user (and their family) in planning a vacation itinerary for **June 6 to June 20, 2026**. This will be an ongoing project over several days. Your role is to help synthesize research, find suitable RV rentals, identify optimal routes, and build an actionable, budget-conscious travel itinerary that meets all the family's constraints.

## Current Trip Status: FULLY CEMENTED ✅

The entire itinerary is now booked and confirmed. No TBD blocks remain.

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

## Web Application & Deployment

### Live Site
**URL:** https://hunter3316.github.io/acadia-trip-2026/

### Repository
**GitHub:** https://github.com/hunter3316/acadia-trip-2026

### Architecture
- **Branch `main`:** Full project — docs, research files, reservation PDFs, and the webapp source in `trip-webapp/`.
- **Branch `gh-pages`:** Deployment branch for GitHub Pages. Contains only the webapp files at the root (`index.html`, `script.js`, `style.css`, `assets/`).

### Deployment Workflow
**IMPORTANT:** When updating the website, you must update BOTH branches:
1. Make changes to files in `trip-webapp/` on the `main` branch. Commit and push.
2. Switch to `gh-pages`: `git checkout gh-pages`
3. Pull the updated files: `git checkout main -- trip-webapp/index.html trip-webapp/script.js trip-webapp/style.css trip-webapp/assets/`
4. Copy to root: `Copy-Item trip-webapp\* . -Recurse -Force` (then `Remove-Item trip-webapp -Recurse -Force`)
5. Commit and push: `git add -A && git commit -m "..." && git push origin gh-pages`
6. Switch back: `git checkout main`

### Webapp Features
- **Passcode:** 3316 (unlocks the app)
- **Tabs:** Itinerary, Route, To-Do, Activities, Wildlife, 🦌 Moose Guide, Campsite, Our RV, Explore, Pro Tips
- **Tech:** Vanilla HTML5/CSS3/JS, offline-ready, localStorage for todo persistence
- **Assets:** `trip-webapp/assets/` — hero images for each section

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

## Workspace Files Context

This folder contains files that will be gathered and developed over time. Use them as context and update them as needed:

1. `Deep reserach on acadia vacation.md` - A massive, highly detailed operational blueprint covering the June 2026 trip. It outlines critical Acadia topographical limitations (dead-end roads, narrow historic underpasses prohibiting oversized rigs), extensive MDI vs. Schoodic Peninsula campground analysis (KOA vs NPS), Island Explorer bus logistics, advanced photography timings for Cadillac Mountain and Raven's Nest, the lupine bloom, Puffin tours, intense dog trail restrictions, dining options, and strategies to mitigate the June black fly season.
2. `trip options.md` - A living document containing ongoing ideas, estimated driving duration maps (e.g., Morgantown vs. Newburgh vs. Burlington), trailering times, and links to potential sub-8000lb RV rental listings (like Jayco Jay Feather / Keystone Bullet Classic).
3. `Acadia NPS Research Summary.md` - A synthesized summary of the most critical logistical constraints pulled straight from nps.gov/acad. Evaluates park campground capabilities (electric/water vs dry, 6-month booking lead time), Cadillac Summit vehicle reservations prohibiting RV trailers, Bark Ranger dog regulations, fees, and includes top spots for photography, tide pooling, and private oceanside RV hookup locations.
4. `Key mistakes to not make.md` - Has some nice tips to be sure to avoid.
5. `Official 2026 Itinerary.md` - The canonical day-by-day schedule with all reservation numbers and costs.
6. `Informatinoal_files/` - Contains reservation PDFs (KOA, Schoodic Woods, Moose Creek) and the Moose Photography deep-research report.

## Agent Directives

* Always reference the constraints (especially trailer weight < 8000 lbs and party size of 6 + dog) when suggesting RVs or campsites.
* When evaluating routes, consider the impact on towing time and driver fatigue.
* Suggest budget-friendly yet comfortable options, sticking to the <$200/day RV rental and <$200/day campsite budget baselines where possible.
* Keep `trip options.md` and any itinerary files updated with the latest viable options and decisions.
* **When updating the webapp**, always deploy to BOTH `main` and `gh-pages` branches (see Deployment Workflow above).

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

## Remaining To-Do Items

- [ ] **Book Cadillac Summit Vehicle Reservation:** 30% open 90 days out (March 2026), 70% open 2 days prior at 10 AM EST via Recreation.gov.
- [ ] **Book Puffin & Whale Watch Tour:** Bar Harbor Whale Watch Co. — book early before June spots sell out.
- [ ] **Pack black fly gear:** Head nets, DEET repellent, long sleeves, lightweight gloves — essential for moose photography sessions.
- [ ] **Camera prep for moose photography:** Window-mounted beanbag, extra batteries, large memory cards, 100-500mm or 150-600mm lens.
