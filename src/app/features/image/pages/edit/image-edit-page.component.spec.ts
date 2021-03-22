import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ActivatedRoute } from "@angular/router";
import { AppModule } from "@app/app.module";
import { ImageGenerator } from "@shared/generators/image.generator";
import { MockBuilder } from "ng-mocks";
import { of } from "rxjs";
import { ImageEditPageComponent } from "./image-edit-page.component";

describe("EditComponent", () => {
  let component: ImageEditPageComponent;
  let fixture: ComponentFixture<ImageEditPageComponent>;
  const image = ImageGenerator.image();

  beforeEach(async () => {
    await MockBuilder(ImageEditPageComponent, AppModule).provide([
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              image
            }
          },
          fragment: of("1")
        }
      }
    ]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize data", () => {
    expect(component.image).toEqual(image);
    expect(component.model).toEqual(image);
  });
});