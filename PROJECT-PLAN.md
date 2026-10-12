# Captain Tiles Adhesive Website - Project Plan

## 1. Project Summary

Build a professional, responsive product website for Captain Tiles Adhesive, a tile adhesive materials business operating from Baran, Rajasthan.

The site will be inspired by the clear product-led presentation of the supplied reference website, while using original Captain branding, product photography, copy, layout, and visual treatment.

The first release will be a static Angular website suitable for GitHub Pages. It will present products, explain product benefits and application, establish trust in the manufacturing operation, and convert visitors into phone, WhatsApp, email, dealer, and customer enquiries.

## 2. Approved Brand Details

| Item | Value |
|---|---|
| Brand name | Captain Tiles Adhesive |
| Website/domain | www.captaintilesadhesive.in |
| Primary brand label | captaintilesadhesive |
| Plant location | Baran, Rajasthan, India |
| Phone | +91 7976369073 |
| WhatsApp | +91 7976369073 |
| Email | captaintilesadhesive@gmail.com |
| Business category | Tile adhesive and tiles-material products |
| Logo | Captain logo supplied by the client |

### Contact actions

- Phone link: `tel:+917976369073`
- WhatsApp link: `https://wa.me/917976369073`
- Email link: `mailto:captaintilesadhesive@gmail.com`
- Contact form submission: to be connected to a static-site-compatible form provider before launch

## 3. Source Assets

The client supplied three image assets through WhatsApp:

1. Captain logo image
2. Captain Tiles Adhesive product-pack image
3. Captain Tiles Adhesive product information/back-label image

Source folder:

`C:\Users\VIKAS NAGAR\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\C8422C73089CC427CE645E780D9F00025ADF6064\transfers\2026-41\`

Available files:

- `WhatsApp Image 2026-10-12 at 8.10.01 AM.jpeg`
- `WhatsApp Image 2026-10-12 at 8.13.09 AM.jpeg`
- `WhatsApp Image 2026-10-12 at 8.16.07 AM.jpeg`

### Asset handling plan

- Copy approved images into `public/assets/images/brand`, `public/assets/images/products`, and `public/assets/images/plant` as appropriate.
- Rename files to descriptive ASCII names such as `captain-logo.jpg`, `captain-tile-adhesive-bag.jpg`, and `captain-tile-adhesive-specifications.jpg`.
- Preserve the original files outside the project until the website asset mapping is approved.
- Crop and optimize images for web use without damaging the product label.
- Add meaningful alt text to every informative image.
- Use the logo with a light background where the black artwork remains readable.

## 4. Product Information to Use

The supplied product packaging indicates the following initial product content. This must be confirmed by the business before publishing as technical or legally binding information.

### Initial product

**Product name:** Captain Tiles Adhesive - Dura Bond

**Product type:** Polymer-modified thin-set adhesive for fixing ceramic and vitrified tiles on horizontal and vertical surfaces in interior and exterior applications.

**Initial benefits shown on packaging:**

- Excellent adhesion strength
- Suitable for interior and exterior use
- Water and moisture resistant
- High bond strength
- Easy to apply
- Long-lasting performance
- Suitable for wall and floor applications

**Suitable for:**

- Ceramic tiles
- Vitrified tiles
- Porcelain tiles

**Initial application flow:**

1. Surface preparation
2. Add water to powder
3. Mix to uniform consistency
4. Apply using a notched trowel
5. Fix tiles firmly
6. Allow the installation to set

**Packaging information visible in supplied image:**

- Net weight: 20 kg
- Made in India
- Available colour references: white and grey

**Technical details visible in supplied image and requiring confirmation:**

- Appearance
- Bulk density
- Water requirement
- Open time
- Adjustability time
- Pot life
- Final setting time
- Coverage
- Storage precautions

No technical value will be presented as final until the client confirms the exact values, product grade, test standards, usage instructions, MRP, batch information, and warranty/safety wording.

## 5. Website Goals

1. Make the brand appear reliable and manufacturing-led.
2. Present Captain Tiles Adhesive as the main product clearly within the first screen.
3. Help customers understand where and how the adhesive is used.
4. Generate calls, WhatsApp conversations, emails, and dealer enquiries.
5. Establish Baran, Rajasthan as the plant and business location.
6. Make the site easy to share and discover through search.
7. Provide a structure that can later support multiple adhesive products and tile-material categories.

## 6. Target Users

- Homeowners planning tile work
- Tile installers and masons
- Contractors and builders
- Tile shops and building-material retailers
- Dealers and distributors
- Architects and project procurement teams

## 7. Information Architecture

### Primary navigation

- Home
- About Us
- Products
- Plant & Quality
- Gallery
- Contact

### Primary header actions

- View Products
- WhatsApp Us

### Mobile navigation

- Collapsible menu
- Persistent WhatsApp action
- Click-to-call action
- Contact link visible without requiring multiple taps

## 8. Page-by-Page Plan

### 8.1 Home page

Purpose: explain the business quickly and direct visitors toward the product or enquiry path.

Sections:

1. Header with Captain logo, navigation, phone, and WhatsApp action.
2. Hero section featuring the product bag and a concise value proposition.
3. Hero calls-to-action: `View Product` and `Talk on WhatsApp`.
4. Trust strip showing Baran manufacturing, quality focus, Indian manufacturing, and customer support.
5. Featured product section for Captain Tiles Adhesive - Dura Bond.
6. Benefits section using the confirmed product claims.
7. Application/use-case section for walls, floors, ceramic, vitrified, and porcelain tiles.
8. Simple six-step application process.
9. Plant and quality preview focused on the Baran operation.
10. Product image or specification preview.
11. Dealer/customer enquiry call-to-action.
12. Footer containing contact details, navigation, social links when supplied, and legal links.

### 8.2 About Us page

Purpose: introduce the business and establish credibility.

Sections:

- Company introduction
- Captain brand story, once supplied by the client
- Baran plant overview
- Product and service commitment
- Quality and consistency principles
- Distribution and support message
- Contact call-to-action

Content requiring confirmation:

- Company legal name
- Year established
- Ownership or founder statement
- Manufacturing capacity
- Service area and distribution states
- Certifications

### 8.3 Products page

Purpose: provide an expandable catalogue structure.

Initial product card:

- Captain Tiles Adhesive - Dura Bond
- Product image
- Short description
- Suitable tiles
- Pack size
- Colour options
- `View Details` action
- `Request Pricing` action

Future-ready categories:

- Tile adhesives
- Grouts
- Construction chemicals
- Waterproofing products
- Other tiles materials

Only categories with confirmed products will be published.

### 8.4 Product details page

Route pattern:

`/products/captain-dura-bond`

Sections:

- Product title and pack image
- Product summary
- Product benefits
- Ideal applications
- Suitable tile types
- Directions for use
- Technical information table
- Coverage and pack information
- Storage and precautions
- Product label image
- Enquiry and WhatsApp actions
- Downloadable technical sheet when supplied

The technical table will be data-driven so new products can be added without duplicating page code.

### 8.5 Plant & Quality page

Purpose: communicate that the product is manufactured and supported from Baran.

Sections:

- Baran plant introduction
- Manufacturing process overview
- Raw material and batch consistency message
- Quality checks
- Packaging and dispatch
- Plant image gallery, when supplied
- Location map link
- Enquiry call-to-action

Do not claim ISO, laboratory accreditation, certifications, capacity, or testing standards unless documentation is supplied.

### 8.6 Gallery page

Purpose: show the real business, product, plant, packaging, and application context.

Initial gallery groups:

- Brand and packaging
- Product details
- Plant and manufacturing
- Tile installation/application

The supplied product and label images will be included first. Additional plant and installation photographs should be collected before launch for a stronger gallery.

### 8.7 Contact page

Sections:

- Contact headline
- Phone card
- WhatsApp card
- Email card
- Baran plant address block
- Google Maps link/embed after the exact address is supplied
- Customer enquiry form
- Dealer/distributor enquiry form or form mode selector
- Business hours, once confirmed

Initial enquiry fields:

- Full name
- Phone number
- Email, optional
- City/location
- Customer type: homeowner, mason, contractor, retailer, dealer, distributor, other
- Product interest
- Estimated requirement, optional
- Message
- Consent checkbox

Form requirements:

- Required-field validation
- Indian phone-number validation
- Accessible error messages
- Success state
- Failure state
- Spam protection
- No secrets embedded in frontend code

## 9. Visual Design Direction

### Brand character

- Strong
- Trustworthy
- Practical
- Manufacturing-focused
- Professional
- Easy to understand

### Suggested palette

Use the supplied black logo and gold/ochre product packaging as the starting point:

- Ink black for typography and navigation
- Warm gold/ochre as the primary brand accent
- Sand or warm neutral for selected background sections
- Off-white for the main canvas
- Charcoal for secondary text
- Green only for WhatsApp/success states
- Red only for validation/error states

The final palette will be checked for readable contrast and will not rely on gold text against light backgrounds.

### Typography

Use a distinctive, highly readable heading font paired with a clean body font. The final selection will be loaded through a stable web-font strategy or self-hosted where appropriate. Typography must remain clear on Hindi-region and English business content if bilingual content is added later.

### Layout principles

- Product-first visual hierarchy
- Wide photography on desktop
- Single-column flow on mobile
- Maximum readable content width
- Clear buttons with familiar icons
- Cards only for repeated products or contact options
- No crowded decorative elements that compete with the packaging
- Consistent spacing and image aspect ratios

## 10. Angular Technical Plan

### Framework

- Latest stable Angular version available at implementation time
- Standalone components
- TypeScript with strict mode
- SCSS styling
- Angular Router
- Angular forms
- Angular CLI production build

### Component areas

`src/app/core`

- Business configuration
- SEO metadata service
- Contact link helpers
- Error handling

`src/app/shared`

- Header
- Footer
- Button
- Product card
- Benefit item
- Contact card
- Enquiry form
- Gallery viewer
- Section heading
- Responsive image component

`src/app/features/home`

- Home page sections

`src/app/features/about`

- About page

`src/app/features/products`

- Product listing
- Product detail
- Product data model

`src/app/features/plant`

- Plant and quality page

`src/app/features/gallery`

- Gallery grid and lightbox

`src/app/features/contact`

- Contact page
- Enquiry form

`src/app/pages`

- Not-found page

### Suggested project structure

```text
captain-tiles-adhesive/
├── .github/
│   └── workflows/
│       └── deploy-github-pages.yml
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── brand/
│   │   │   ├── products/
│   │   │   ├── plant/
│   │   │   └── gallery/
│   │   ├── icons/
│   │   └── documents/
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── shared/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.component.*
│   ├── styles/
│   │   ├── _tokens.scss
│   │   ├── _reset.scss
│   │   ├── _layout.scss
│   │   └── _utilities.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

### Data model

Products will be represented with typed data rather than hard-coded markup.

```text
Product
- slug
- name
- shortDescription
- description
- image
- labelImage
- packSize
- availableColours
- suitableFor
- benefits[]
- directions[]
- technicalSpecifications[]
- precautions[]
- published
```

Business contact details will be centralized so the phone, email, WhatsApp URL, domain, and location are updated in one place.

## 11. Routing and GitHub Pages Considerations

Planned routes:

- `/`
- `/about`
- `/products`
- `/products/captain-dura-bond`
- `/plant-quality`
- `/gallery`
- `/contact`
- `/dealer-enquiry`
- `/**` for the not-found page

GitHub Pages serves static files and does not natively understand Angular deep links. The deployment plan will therefore include:

- Correct Angular production base href
- GitHub Actions deployment to the Pages environment
- A static `404.html` fallback for browser refreshes on nested routes
- Verification of direct navigation to every route
- Verification that all image and CSS paths work under the custom domain

## 12. SEO Plan

### Page metadata

Every route will receive:

- Unique title
- Meta description
- Canonical URL
- Open Graph title and image
- Open Graph description
- Twitter/social card metadata

### Initial SEO themes

- Tile adhesive manufacturer in Baran
- Tile adhesive supplier in Rajasthan
- Ceramic tile adhesive
- Vitrified tile adhesive
- Porcelain tile adhesive
- Wall and floor tile adhesive
- Captain Tiles Adhesive

No keyword stuffing. Content will remain natural and useful.

### Structured data

Add JSON-LD where the information is confirmed:

- Organization
- LocalBusiness or ManufacturingBusiness
- Product
- BreadcrumbList
- WebSite

## 13. Accessibility Plan

- Semantic HTML landmarks
- One clear page heading per route
- Keyboard-accessible navigation and gallery
- Visible focus states
- Accessible button labels
- Alt text for meaningful images
- Empty alt text for decorative images
- Sufficient text/background contrast
- Form labels connected to controls
- Error messages announced accessibly
- Reduced-motion support
- Touch targets sized for mobile use

## 14. Performance Plan

- Compress and resize images for their display dimensions
- Use modern image formats where supported, with fallbacks if needed
- Lazy-load below-the-fold images
- Avoid large autoplay video in the first release
- Keep third-party scripts to a minimum
- Use route-level lazy loading where useful
- Test the production build on a mobile connection
- Check Core Web Vitals before launch

## 15. Enquiry and Lead Handling

GitHub Pages cannot run a private backend. The initial implementation will use one of these approved approaches:

1. Formspree: simplest hosted form endpoint
2. EmailJS: sends directly through a configured email service
3. Serverless function: more control, added deployment and maintenance

Recommended first release: Formspree or EmailJS, subject to the client's preferred email workflow.

The website will always retain direct phone, WhatsApp, and email actions even if form delivery is temporarily unavailable.

## 16. Deployment Plan

### GitHub repository

- Create a repository for the Angular project.
- Keep the default branch protected after the first stable release.
- Store no API keys, form secrets, or private credentials in the repository.

### GitHub Pages

- Add a GitHub Actions workflow that installs dependencies, builds Angular, and publishes the output.
- Use the repository's Pages deployment environment.
- Verify the generated build folder and base path.
- Add the custom-domain file containing:

```text
www.captaintilesadhesive.in
```

### DNS

At the domain provider:

- Add a CNAME record for `www` pointing to the GitHub Pages hostname.
- Configure the root/apex domain according to the domain provider's GitHub Pages instructions.
- Enable HTTPS after DNS verification.
- Test both the `www` and root domain behavior, with one selected as canonical.

### Launch checklist

- Production build succeeds
- All routes work through direct URL navigation
- Logo and product images load
- Phone, WhatsApp, and email links work
- Enquiry form sends a test submission
- Mobile layout works
- Custom domain resolves
- HTTPS is active
- Search metadata is present
- No placeholder business claims remain

## 17. Testing Plan

### Component and unit checks

- Product data renders correctly
- Contact links contain the correct number
- Form validation handles empty and invalid values
- Product detail route handles a valid slug
- Unknown product slug shows a not-found state

### Browser checks

- Home page at desktop width
- Home page at mobile width
- Header menu on mobile
- Product listing and detail navigation
- Gallery open/close and keyboard behavior
- Contact links
- Form success and error states
- Browser refresh on nested routes

### Accessibility checks

- Keyboard-only navigation
- Focus visibility
- Screen-reader labels
- Color contrast
- Form error association

### Production checks

- `ng build` succeeds
- GitHub Actions deployment succeeds
- Direct custom-domain URL loads
- No missing asset requests
- No console errors

## 18. Content and Business Information Required Before Launch

The following details remain to be supplied or confirmed:

- Exact legal business name
- Complete Baran plant address
- Google Maps location
- Business operating hours
- Company history and founding year
- Product grades and complete product list
- Confirmed technical specification values
- Confirmed product colour options
- Confirmed coverage and water ratio
- MRP, dealer price, or decision to show `Request Pricing`
- Batch, expiry, storage, and safety wording
- Certifications and test reports
- Manufacturing photographs
- Tile installation photographs
- Social media links
- Preferred form provider
- Domain registrar/DNS access when deployment begins

## 19. Delivery Phases

### Phase 1 - Foundation

- Create latest Angular project
- Configure strict TypeScript, SCSS, routing, and shared styles
- Add brand constants and base asset folders
- Add logo and supplied product assets

### Phase 2 - Design system

- Define colours, typography, spacing, buttons, responsive breakpoints, and image rules
- Build header, footer, layout shell, and mobile navigation

### Phase 3 - Core pages

- Build Home
- Build About Us
- Build Products
- Build Product Details

### Phase 4 - Trust and conversion pages

- Build Plant & Quality
- Build Gallery
- Build Contact
- Build Dealer Enquiry
- Add phone, email, and WhatsApp actions

### Phase 5 - Quality hardening

- Add SEO metadata and structured data
- Add accessibility improvements
- Optimize images
- Add 404 handling
- Validate forms and all routes

### Phase 6 - Deployment

- Add GitHub Actions
- Configure GitHub Pages
- Add `CNAME`
- Test DNS and HTTPS
- Run production smoke checks

## 20. Definition of Done

The project is complete when:

- The website uses Captain Tiles Adhesive branding and the supplied logo.
- The supplied product images are displayed clearly and responsively.
- The business name, website, phone, WhatsApp, email, and Baran location are represented correctly.
- Visitors can understand the product, its use, benefits, and available pack information.
- Visitors can contact the business through phone, WhatsApp, email, and enquiry form.
- All planned pages are responsive and accessible.
- The Angular production build passes.
- The project has a clean, maintainable file structure.
- GitHub Pages deployment is automated.
- The custom domain is configured and tested.
- All technical, certification, address, and business claims have been confirmed by the client before launch.
