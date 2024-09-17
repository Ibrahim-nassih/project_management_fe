import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbNavModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbToastModule,
    NgbPaginationModule, NgbTooltipModule, NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Counter
import { CountToModule } from 'angular-count-to';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ClientLogoComponent } from './landing/index/client-logo/client-logo.component';
import { ServicesComponent } from './landing/index/services/services.component';
import { CollectionComponent } from './landing/index/collection/collection.component';
import { CtaComponent } from './landing/index/cta/cta.component';
import { PlanComponent } from './landing/index/plan/plan.component';
import { FaqsComponent } from './landing/index/faqs/faqs.component';
import { ReviewComponent } from './landing/index/review/review.component';
import { FooterComponent } from './landing/index/footer/footer.component';
import { ScrollspyDirective } from './scrollspy.directive';

// NFT Landing 
import { MarketPlaceComponent } from './landing/nft/market-place/market-place.component';
import { WalletComponent } from './landing/nft/wallet/wallet.component';
import { FeaturesComponent } from './landing/nft/features/features.component';
import { CategoriesComponent } from './landing/nft/categories/categories.component';
import { DiscoverComponent } from './landing/nft/discover/discover.component';
import { TopCreatorComponent } from './landing/nft/top-creator/top-creator.component';

// Job Landing 
import { ProcessComponent } from './landing/job/process/process.component';
import { FindjobsComponent } from './landing/job/findjobs/findjobs.component';
import { CandidatesComponent } from './landing/job/candidates/candidates.component';
import { BlogComponent } from './landing/job/blog/blog.component';
import { JobcategoriesComponent } from './landing/job/jobcategories/jobcategories.component';
import { JobFooterComponent } from './landing/job/job-footer/job-footer.component';
import { ToastComponent } from './toast/toast.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import {NgbdListSortableHeader} from "./list/listjs-sortable.directive";
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";
import {CustumTablePipe} from "./pipes/custumTable";
import { DrawerComponent } from './drawer/drawer.component';
import {FlatpickrModule} from "angularx-flatpickr";
import { ListSimpleComponent } from './list-simple/list-simple.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ClientLogoComponent,
    ServicesComponent,
    CollectionComponent,
    CtaComponent,
    PlanComponent,
    FaqsComponent,
    ReviewComponent,
    FooterComponent,
    ScrollspyDirective,
    MarketPlaceComponent,
    WalletComponent,
    FeaturesComponent,
    CategoriesComponent,
    DiscoverComponent,
    TopCreatorComponent,
    ProcessComponent,
    FindjobsComponent,
    CandidatesComponent,
    BlogComponent,
    JobcategoriesComponent,
    JobFooterComponent,
    ToastComponent,
    ListComponent,
      NgbdListSortableHeader,
      CustumTablePipe,
      DrawerComponent,
      ListSimpleComponent,
      DateAgoPipe,
  ],
    imports: [
        CommonModule,
        NgbNavModule,
        NgbAccordionModule,
        NgbDropdownModule,
        NgxUsefulSwiperModule,
        CountToModule,
        NgbToastModule,
        FormsModule,
        NgbPaginationModule,
        NgbTooltipModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule
    ],
    exports: [BreadcrumbsComponent, ClientLogoComponent, ServicesComponent, CollectionComponent, CtaComponent, PlanComponent, FaqsComponent, ReviewComponent, FooterComponent, ScrollspyDirective,
        WalletComponent, MarketPlaceComponent, FeaturesComponent, CategoriesComponent, DiscoverComponent,
        TopCreatorComponent, ProcessComponent, FindjobsComponent, CandidatesComponent,
        BlogComponent, JobcategoriesComponent, JobFooterComponent, ToastComponent, ListComponent, DrawerComponent, ListSimpleComponent,DateAgoPipe]
})
export class SharedModule { }
