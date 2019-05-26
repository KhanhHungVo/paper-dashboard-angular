import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './pages/sidebar/sidebar.module';
import { FooterModule } from './shared/layouts/footer/footer.module';
import { NavbarModule} from './shared/layouts/navbar/navbar.module';
import { FixedPluginModule} from './shared/layouts/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { UserComponent }   from './pages/user/user.component';
import { TableComponent }   from './pages/table/table.component';
import { TypographyComponent }   from './pages/typography/typography.component';
import { IconsComponent }   from './pages/icons/icons.component';
import { MapsComponent }   from './pages/maps/maps.component';
import { NotificationsComponent }   from './pages/notifications/notifications.component';
import { UpgradeComponent }   from './pages/upgrade/upgrade.component';
import {TestComponent} from './pages/test/test.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TestComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
