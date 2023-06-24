import { Module } from "@nestjs/common";

import { CreditApiService } from "./credit-api.service";
import { CreditService } from "./credit.service";

@Module({
    providers: [CreditApiService, CreditService],
})
export class CreditModule {}
