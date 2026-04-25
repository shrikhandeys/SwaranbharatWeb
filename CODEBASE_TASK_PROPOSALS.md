# Codebase Task Proposals

This document captures four concrete tasks discovered during a quick codebase audit.

## 1) Typo / wording consistency task

**Issue:** The chatbot UI uses "Enquiry" while the main form/component naming uses "Inquiry".

- `Track Enquiry` card label in chatbot.
- `Track your enquiry` panel title.
- `Enquiry ID` field label.

**Why this matters:** The product currently mixes two spellings for the same concept, which can look unpolished and create inconsistency in UI copy/search terms.

**Proposed task:** Standardize all end-user copy to a single spelling (recommended: **Inquiry** for consistency with `InquiryForm` and U.S.-facing English in the rest of the app).

**Acceptance criteria:**
- All user-facing occurrences in chatbot copy are updated to "Inquiry".
- A quick grep confirms no mixed spelling remains in UI strings.

## 2) Bug fix task

**Issue:** Server-side `/api/contact` validation is weaker than client-side form validation.

- `contactMethod` can be `email` while `email` is empty.
- `contactMethod` can be `mobile` while `mobile` is empty.
- `seriousBuyer` is only typed as boolean server-side, but the client requires it to be `true`.

**Why this matters:** A direct API caller can bypass important business rules and submit invalid leads, reducing data quality and making downstream CRM automation unreliable.

**Proposed task:** Align API schema with client schema by adding conditional validation for `contactMethod` and a refinement requiring `seriousBuyer === true`.

**Acceptance criteria:**
- Invalid payloads (e.g., `contactMethod: "email"` with empty `email`) return HTTP 400.
- Invalid payloads with `seriousBuyer: false` return HTTP 400.
- Valid payloads still return HTTP 200.

## 3) Comment/documentation discrepancy task

**Issue:** README homepage module list does not match the rendered homepage.

README says the homepage includes sections like:
- Product categories
- Certifications marquee
- Research & Insights preview

But `src/app/page.tsx` currently does not render those components.

**Why this matters:** New contributors and stakeholders may assume these modules are live when they are not, causing planning and QA confusion.

**Proposed task:** Choose one of:
1. Update README to match the current rendered sections, **or**
2. Re-add/render the missing sections so implementation matches the README.

**Acceptance criteria:**
- README and `page.tsx` are fully aligned.
- A reviewer can compare the list and rendered component tree without mismatch.

## 4) Test improvement task

**Issue:** The project currently has lint/typecheck scripts but no automated test script and no coverage for form/API validation paths.

**Why this matters:** Critical validation logic (client + API) can regress silently.

**Proposed task:** Add a test harness (e.g., Vitest) and create focused tests for `/api/contact` validation rules, including honeypot handling and contact-method conditional checks.

**Acceptance criteria:**
- `npm test` script exists and runs in CI/local.
- At least one test file covers valid + invalid contact payloads.
- Tests assert status codes and response shapes for success/failure.

---

## How to see these changes locally

Run the following commands from the repository root:

```bash
git log --oneline -n 5
# note the commit hash for: "Add codebase audit task proposals"

git show --stat --patch b263faf
# replace b263faf with the commit hash from your local log if needed
```

If you want to compare your current branch to `main`:

```bash
git fetch origin
git diff --name-status origin/main...HEAD
git diff origin/main...HEAD
```
