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
   MatTableModule, MatPaginatorModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    MatTableModule, MatPaginatorModule
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
    MatPaginatorModule
  ]
})
export class CustomMaterialModule {
}
