# Web Accessibility Testing and Remediation

A beginner-friendly static website for practising basic web accessibility checks and documenting improvements. Built with HTML, CSS, and vanilla JavaScript; no build tools or dependencies are required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Test the page with a keyboard and browser developer tools.
4. Optionally run a reputable accessibility checker and manually verify its findings.

## What this demo includes

- Semantic page landmarks and a logical heading structure
- Skip link to main content
- Visible keyboard focus styles
- Explicit form labels and field hints
- Client-side validation with accessible error/status messages
- Responsive layout and reduced-motion preference handling
- A manual testing checklist

## Suggested testing workflow

1. Use `Tab`, `Shift+Tab`, `Enter`, `Space`, and arrow keys where appropriate.
2. Confirm focus is visible and follows a sensible order.
3. Submit the form empty, with an invalid email, and with valid sample values.
4. Zoom to 200% and check for content loss or horizontal scrolling.
5. Measure text and control contrast with a contrast checker.
6. Use an accessibility checker as one input, not as proof of conformance.
7. Log each issue with: page/element, steps to reproduce, expected result, actual result, impact, proposed fix, and retest result.

## Issue log template

| ID | Element / location | Steps to reproduce | Expected result | Actual result | Proposed fix | Retest |
|---|---|---|---|---|---|---|
| A-01 | _Fill after testing_ | _Fill after testing_ | _Fill after testing_ | _Fill after testing_ | _Fill after testing_ | _Pass/Fail_ |

## Important notes

- This is a learning demo, not a certification or guarantee of WCAG conformance.
- Automated tools cannot detect every accessibility barrier. Manual testing and, where possible, assistive-technology testing are also important.
- The form is front-end only. It does not send or store personal information.
- Do not claim you performed tests or fixed issues until you have actually done so.


