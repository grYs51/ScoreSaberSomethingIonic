import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
import { IndexRouter } from './index.routing.module';
import { WelcomeModalComponent } from './pages/welcome-modal/welcome-modal.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        IonicModule,
        IndexRouter,
        ReactiveFormsModule,
        ComponentsModule],
    declarations: [
        IndexPage,
        WelcomeModalComponent],
    exports: [
        WelcomeModalComponent
    ]
})
export class IndexPageModule { }
