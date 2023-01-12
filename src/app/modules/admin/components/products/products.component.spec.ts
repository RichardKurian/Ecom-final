// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';

// import { ProductsComponent } from './products.component';

// describe('ProductsComponent', () => {
//   let component: ProductsComponent;
//   let fixture: ComponentFixture<ProductsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule
//       ],
//       declarations: [ ProductsComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



/////2nd aproach


// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { DataService } from 'src/app/services/data.service';

// import { ProductsComponent } from './products.component';

// describe('ProductsComponent', () => {
//   let component: ProductsComponent;
//   let fixture: ComponentFixture<ProductsComponent>;

//   beforeEach(async () => {

//     const dataServiceSpy =jasmine.createSpyObj<DataService>(['getProducts'])
//     dataServiceSpy.getProducts.and.callFake(function():any{
//        return of({
//         results:[
//          {
//           name:'iphone',
//           company:'apple'
//          }
//         ]
//        })
// })
//     await TestBed.configureTestingModule({
//       // imports: [
//       //   RouterTestingModule,
//       //   HttpClientTestingModule
//       // ],
//       declarations: [ ProductsComponent ],
//       providers:[
//         {
//           provide:DataService,
//           useValue:dataServiceSpy
//         }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('component should be defined', () => {
//     expect(component).toBeDefined();
//   });


//   it('2nd test case', () => {

//     component.ngOnInit();
//     tick();
//     fixture.detectChanges();
//     console.log(fixture.debugElement);
//     component.ngOnInit()
//     // expect(component).toBeTruthy();
//     // expect(fixture.debugElement.query(By.css('selection-group'))).toBeTruthy();
//     expect(component.productsArray).toBe(Object);
//     // expect(component.ngOnInit).toHaveBeenCalled();
//   });

 

// });



//3rd approach//////////////////////////////////////////////////////



import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DataMockService } from 'src/app/services/dataMockService';
import { HeaderComponent } from '../header/header.component';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

// let POSTS:any;
// let mockPostService:any;

  beforeEach(async () => {


    // mockPostService = jasmine.createSpyObj<DataService>(['getProducts']);
    // mockPostService = jasmine.createSpyObj(['getProducts']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ProductsComponent,],
      providers:[
        {
          provide:DataService,
          useClass:DataMockService
          
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  it('lenght = 2 ', () => {

    console.log(component.productsArray);
    expect(component.productsArray.length).toBe(2);
  });

  // it('should set set post from service directly', () => {
  //   // mockPostService.getProducts.and.returnValue(of([{name:"asf"}]));
  //   // mockPostService.getProducts.and.callFake(()=>{
  //   //   return of(POSTS);
  //   // });
  //   // fixture.autoDetectChanges();
  //   component.ngOnInit();
  //   mockPostService.getProducts.and.returnValue(of([{name:"asf"}]));
  //   console.log("products--mockpost service",mockPostService);
  //   expect(component.productsArray.length).toBe(1);
  // });

});