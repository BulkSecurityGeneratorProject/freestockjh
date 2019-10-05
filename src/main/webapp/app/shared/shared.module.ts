import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FreeStockJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FreeStockJhSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FreeStockJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FreeStockJhSharedModule {
  static forRoot() {
    return {
      ngModule: FreeStockJhSharedModule
    };
  }
}
