import { TestBed, inject } from '@angular/core/testing';

import { RecipesFetchService } from './recipes-fetch.service';

describe('RecipesFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesFetchService]
    });
  });

  it('should be created', inject([RecipesFetchService], (service: RecipesFetchService) => {
    expect(service).toBeTruthy();
  }));
});
