# 2026 Acadia & Vermont Trip - Agent Prompt / Context

## Purpose

You are assisting the user (and their family) in planning a vacation itinerary for **June 6 to June 21, 2026**. This will be an ongoing project over several days. Your role is to help synthesize research, find suitable RV rentals, identify optimal routes, and build an actionable, budget-conscious travel itinerary that meets all the family's constraints.

## Trip Overview

* **Dates:** June 6, 2026 – June 21, 2026
* **Party:** 6 people total (5 Adults, one 13-year-old child) + 1 Golden Retriever.
* **Starting & Ending Point:** Morgantown, WV
* **Destinations:**
  1. **Cambridge, VT:** Staying for ~6–7 days with the user's wife's (Erica's) family. The family will stay in the rented RV parked at their house.
  2. **Acadia National Park, ME:** Spending around a week here. Must stay in a campground with the RV.

## Constraints & Preferences

### RV Rental & Towing

* **Tow Vehicle:** 2021 Chevy Suburban, 4WD, 5.3L V8.
* **Towing Capacity:** 8,100 lbs.
* **Trailer Weight Limit:** Must be under 8,000 lbs. (7,000 lbs is ideal; 6,000 lbs is great).
* **RV Features:** Slide-outs are highly desirable for comfort (due to the size of the party), but not strictly mandatory. Newer, decent-condition RVs are strongly preferred. Must accommodate 6 people + 1 large dog.
* **Budget:** Aim for **<$200/day** for the RV rental cost, and **<$200/day** for each campsite. Budget is flexible but we want to remain budget-conscious.
* **Logistics:** We want to minimize towing distance and time to save on gas and driving fatigue. Do not plan to tow the RV all the way from Morgantown, WV. Keep the towing time to a minimum.

### RV Pickup / Route Options to Explore

* **Option 1 (Common Point - NY):** Drive from WV to around Newburgh, NY. Pick up the RV there. Tow to Cambridge, VT -> Tow to Acadia -> Return RV in Newburgh, NY -> Drive home to WV.
* **Option 2 (Minimum Towing - VT):** Drive from WV to Burlington, VT. Pick up RV there. Tow to Cambridge, VT -> Tow to Acadia -> Tow back to Cambridge for one night -> Drop off RV in Burlington, VT -> Drive home to WV.

### Campground Preferences (Acadia)

* Must accommodate the selected RV.
* **Hookups:** Electric and water are mandatory. Septic/sewer is highly desirable but can be sacrificed for a significantly better campground experience.

## Workspace Files Context

This folder contains files that will be gathered and developed over time. Use them as context and update them as needed:

1. `Deep reserach on acadia vacation.md` - A massive, highly detailed operational blueprint covering the June 2026 trip. It outlines critical Acadia topographical limitations (dead-end roads, narrow historic underpasses prohibiting oversized rigs), extensive MDI vs. Schoodic Peninsula campground analysis (KOA vs NPS), Island Explorer bus logistics, advanced photography timings for Cadillac Mountain and Raven's Nest, the lupine bloom, Puffin tours, intense dog trail restrictions, dining options, and strategies to mitigate the June black fly season.
2. `trip options.md` - A living document containing ongoing ideas, estimated driving duration maps (e.g., Morgantown vs. Newburgh vs. Burlington), trailering times, and links to potential sub-8000lb RV rental listings (like Jayco Jay Feather / Keystone Bullet Classic).
3. `Acadia NPS Research Summary.md` - A synthesized summary of the most critical logistical constraints pulled straight from nps.gov/acad. Evaluates park campground capabilities (electric/water vs dry, 6-month booking lead time), Cadillac Summit vehicle reservations prohibiting RV trailers, Bark Ranger dog regulations, fees, and includes top spots for photography, tide pooling, and private oceanside RV hookup locations.
4. "Key mistakes to not make.md": has some nice tips to be sure to avoid.

## Agent Directives

* Always reference the constraints (especially trailer weight < 8000 lbs and party size of 6 + dog) when suggesting RVs or campsites.
* When evaluating routes, consider the impact on towing time and driver fatigue.
* Suggest budget-friendly yet comfortable options, sticking to the <$200/day RV rental and <$200/day campsite budget baselines where possible.
* Keep `trip options.md` and any itinerary files updated with the latest viable options and decisions.

## Preferences & Trip Logistics

### General Flow & Dates

* **Split:** Roughly 6-7 days in Cambridge, VT, and the remainder (approx 7-8 days) in Acadia. It is perfectly fine to split the Cambridge visit into two parts (e.g., 2-3 days before Acadia, 3 days after) if it optimizes the schedule or route.
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
* **Campsite Strategy:** We prefer having **two different campsites** during the Acadia week to avoid getting tired of one local area and to secure different coastal vistas (e.g., one site directly on the ocean for tidepooling, another on the cliffs), though a single perfect base camp is also acceptable. Very flexible.

### Dining

* The group plans to bring most of their own food to prepare and eat at the RV to remain budget-conscious.
* However, integrating a few interesting, iconic local restaurants (e.g., Maine seafood) into the itinerary is welcomed and desired.

### Photography Targets

* There are two dedicated wildlife and landscape photographers in the family.
* **Targets:** Acadia coastline, sunrise/sunset, Puffins, Loons, Whales, and marine life.
* **Camp Vistas:** Strongly desire camping right on the water/ocean for immediate access to tide pools and beautiful vistas (cliffs overlooking the ocean). Moving the RV a few times to get these prime spots is fully approved.

## Immediate To-Do List (Action Required - March 2026)

Since the trip is less than 3 months away (June 2026) and today is late March 2026, several critical reservation windows have already opened. Immediate action is strongly recommended on the following:

- [ ] **Book RV Rental (URGENT):** Summer travel trailer inventory (<8000 lbs) in VT/NY will be thinning out rapidly. Secure the rental vehicle immediately.
- [ ] **Book Private Oceanside Campsite (URGENT):** Private waterfront sites like Bar Harbor/Oceanside KOA authorize bookings up to a year in advance. Prime spots on the ocean for June are highly competitive. Check and book today.
- [ ] **Check NPS Campground Sites (Schoodic Woods):** The 6-month booking window for National Park campgrounds opened on Dec 1, 2025. Check Recreation.gov right now for any remaining Loop B (pull-through RV) sites.
  - *Fallback:* If full, set calendar reminders for the 14-day rolling window (late May 2026) to grab the final 10% of reserved sites.
- [ ] **Book Puffin & Whale Watch Tours:** Early June tours (right around the Acadia Birding Festival) are highly sought after by photographers. Lock in a Bar Harbor Whale Watch Co. (or similar) Puffin/Lighthouse cruise to guarantee your spots.
- [ ] **Cadillac Summit Sunrise Reservation:** The 90-day booking window for the first 30% of sunrise tickets for early June opened in early March. Check Recreation.gov immediately for any remaining 90-day tickets.
  - *Fallback:* Set an ironclad calendar reminder for exactly 2 days prior to your desired sunrise date at 10:00 AM EST to secure the remaining 70% of tickets.
