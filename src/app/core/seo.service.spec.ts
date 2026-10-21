import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate organization schema', () => {
    const org = service.getOrganizationSchema();
    expect(org['@type']).toBe('Organization');
    expect(org['name']).toBe('Captain Tiles Adhesive');
  });

  it('should generate local business schema', () => {
    const local = service.getLocalBusinessSchema();
    expect(local['@type']).toBe('LocalBusiness');
    expect(local['telephone']).toBe('+917976369073');
  });

  it('should generate breadcrumb schema', () => {
    const breadcrumbs = service.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
    ]);
    expect(breadcrumbs['@type']).toBe('BreadcrumbList');
    expect(Array.isArray(breadcrumbs['itemListElement'])).toBeTrue();
  });
});
