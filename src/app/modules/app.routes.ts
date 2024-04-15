import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { PropertyDetailsComponent } from "../components/property-details/property-details.component";
import { SearchComponent } from "../components/search/search.component";
import { FooterComponent } from "../components/footer/footer.component";
import { BuyerComponent } from "../components/buyer/buyer.component";
import { SellerComponent } from "../components/seller/seller.component";
import { BuyerSellerComponent } from "../components/buyer-seller/buyer-seller.component";
import { AdminComponent } from "../components/admin/admin.component";
import { CreatePropertyComponent } from "../components/create-property/create-property.component";
import { UpdatePropertyComponent } from "../components/update-property/update-property.component";

const routes: Routes = [

    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'property/details:id', component: PropertyDetailsComponent},
    {path:'search:propertyCategory', component: SearchComponent},
    {path:'buyer', component: BuyerComponent},
    {path:'seller', component: SellerComponent},
    {path:'buyer-seller', component: BuyerSellerComponent},
    {path:'admin', component: AdminComponent},
    {path:'create/property:id', component: CreatePropertyComponent},
    {path:'update/property:id', component: UpdatePropertyComponent},


] 

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutesModules {} 