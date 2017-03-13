import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core'

//Service
import { FirebaseConfigService } from './service/firebase-config.service'

@NgModule({
    imports : [],
    declarations: [ ],
    exports: [ ]
})

export class CoreModule{
    //Check if the coremodule exits - SINGLETON EXAMPLE
    constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
        if(parentModule){
            throw new Error(
                "CoreModule exits already. Only import in the root/app module"
            )
        }
    }

    static forRoot(): ModuleWithProviders{
        return {
            ngModule : CoreModule,
            providers: [ FirebaseConfigService ]
        }
    }
}