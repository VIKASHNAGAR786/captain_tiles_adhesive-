import { TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
    }).compileComponents();
  });

  it('should create the calculator component', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should calculate required bags accurately with site buffer', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.componentInstance;
    
    // Default 350 sq ft with 45 sq ft standard coverage: (350 / 45) * 1.05 = 8.16 -> 9 bags
    component.setQuickArea(350);
    expect(component.calculatedBags()).toBe(9);
    expect(component.totalWeightKg()).toBe(180);
  });

  it('should generate prefilled whatsapp link', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.componentInstance;
    const url = component.whatsappUrl();
    expect(url).toContain('https://wa.me/917976369073');
    expect(url).toContain('Bags');
  });
});
