import { CreditModule } from "src/credit/credit.module";
import { Module } from "@nestjs/common";

import { FinancialServicesController } from "./financial-services.controller";
import { FinancialServicesService } from "./financial-services.service";

@Module({
    imports: [CreditModule],
    controllers: [FinancialServicesController],
    providers: [FinancialServicesService],
})
export class FinancialServicesModule {
    /* body */
}
