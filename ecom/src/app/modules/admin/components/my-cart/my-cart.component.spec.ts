

import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

import { MyCartComponent } from './my-cart.component';
import { CartMockService } from 'src/app/services/cartMockService';



describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ MyCartComponent ],
      providers:[
        {
          // provide:CartService,
          // useClass:CartMockService
          provide:CartService,
          useClass:CartMockService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct value as 3', () => {

    // component.ngOnInit();
    expect(component.products.length).toBe(3);
  })

  it('should return the correct value as 10 ie the mock total', () => {

  
    expect(component.grandTotal).toBe(10);
  })
  

});

