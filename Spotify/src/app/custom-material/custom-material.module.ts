import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {
  MatButtonModule,
  MatDividerModule, MatDrawerContainer, MatIconModule,
  MatInputModule, MatListModule, MatProgressBarModule,
  MatProgressSpinner, MatSelectModule,
  MatSidenavModule,
  MatSpinner,
  MatTableModule, MatPaginatorModule, MatFormFieldModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ]
})
export class CustomMaterialModule {
}
