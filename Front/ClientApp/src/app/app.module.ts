import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteReadComponent } from './cliente-read/cliente-read.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import {MatFormFieldModule} from '@angular/material/form-field';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteDeleteComponent,
    ClienteUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
    

    
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
