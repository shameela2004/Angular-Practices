import { NgModule } from "@angular/core";
import { Hello } from "./hello";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[Hello],
    imports:[CommonModule],
    exports:[Hello]
})
export class HelloModule {}