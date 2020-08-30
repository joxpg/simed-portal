import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
],
    exports: [
 //     BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ]
  })
  export class SharedModule { }