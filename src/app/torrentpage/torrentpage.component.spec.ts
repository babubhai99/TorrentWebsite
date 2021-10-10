import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentpageComponent } from './torrentpage.component';

describe('TorrentpageComponent', () => {
  let component: TorrentpageComponent;
  let fixture: ComponentFixture<TorrentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrentpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
