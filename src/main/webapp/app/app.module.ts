import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication5SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication5CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication5AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication5HomeModule } from './home/home.module';
import { JhipsterSampleApplication5EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication5SharedModule,
    JhipsterSampleApplication5CoreModule,
    JhipsterSampleApplication5HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication5EntityModule,
    JhipsterSampleApplication5AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication5AppModule {}
