import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CustomSelectComponent } from 'src/app/shared/components/custom-select/custom-select.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CustomSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.dropdown-container__title');
    expect(titleElement.textContent).toContain('Custom Dropdown');
  });

  it('should handle option selected', () => {
    const option = 'Test Option';
    component.handleOptionSelected(option);
    expect(component.selectedOption).toBe(option);
  });

  it('should render options in app-custom-select', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    component.options = options;
    fixture.detectChanges();

    const customSelectElement = fixture.debugElement.query(By.directive(CustomSelectComponent));
    expect(customSelectElement).toBeTruthy();

    const customSelectComponent = customSelectElement.componentInstance as CustomSelectComponent;
    expect(customSelectComponent.options).toEqual(options);
  });
});