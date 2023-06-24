import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { CreditApiService } from "src/credit/credit-api.service";

import { Injectable } from "@nestjs/common";

import { FinancialServicesApiInterface } from "./financial-services-api.interface";
import { FinancialServicesTypeEnum } from "./financial-services-type.enum";

@Injectable()
export class FinancialServicesService {
    get(domain: string): FinancialServicesApiInterface {
        switch (domain) {
            case FinancialServicesTypeEnum.CREDIT:
                return new CreditApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
