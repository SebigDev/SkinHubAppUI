import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { ColorTypeService } from './api/colorType.service';
import { CommentService } from './api/comment.service';
import { GenderTypeService } from './api/genderType.service';
import { MemberService } from './api/member.service';
import { PostService } from './api/post.service';
import { ProductListTypeService } from './api/productListType.service';
import { ProductTypeService } from './api/productType.service';
import { ReplyService } from './api/reply.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    ColorTypeService,
    CommentService,
    GenderTypeService,
    MemberService,
    PostService,
    ProductListTypeService,
    ProductTypeService,
    ReplyService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
