import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Media, MediaOriginal } from '@ionic-native/media';

import { IonicStorageModule } from '@ionic/storage';
//import { SpotifyAuthOriginal } from '@ionic-native/spotify-auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    //SpotifyAuthOriginal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MediaOriginal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
