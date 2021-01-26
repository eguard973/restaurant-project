import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from "rxjs";

@Injectable()
export class BeersService {
    constructor(private httpService: HttpService) {}

    async findAll():  Promise<Observable<any>> {
        return await this.httpService
            .get('https://sandbox-api.brewerydb.com/v2/brewery/941OaA/beers?key=8abc02b339a339b7c1d68072abe3ae0c')
            .toPromise()
            .then(res => res.data.data)
            .catch( err => console.log(err));
    }
}
