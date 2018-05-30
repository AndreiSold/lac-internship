import { TestBed, inject } from '@angular/core/testing';


describe('FileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileServiceService]
    });
  });

  it('should be created', inject([FileServiceService], (service: FileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
