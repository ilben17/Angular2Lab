import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router} from '@angular/router'
import { IEmployee } from './employee.model'
import { EmployeeService } from './employee.service'

// Import rxjs retry operator
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

//pour desinscrire d'observable
import { ISubscription } from 'rxjs/Subscription'


@Component({
  templateUrl: './oneEmployeeToDisplay.html'
})
export class OneEmployee implements OnInit {

  employee: IEmployee
  statusMessage: string = 'Loading data....';
  subscription: ISubscription

  constructor(private _employeeService: EmployeeService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  back(): void{
    this._router.navigate(['/mesemployees']);
  }

  ngOnInit() {
    let codeToSearch: string = this._activatedRoute.snapshot.params['code'];

    this.subscription = this._employeeService.getEmployee(codeToSearch)
      //Faire plusieurs tentatives d,appel au serveur si y a un probleme (Pour voir le resultat naviguer vers oneEmployeeToDisplay, arreter le service web puis reloader la meme page)
      // Retry 5 times maximum with a delay of 1 second
      // between each retry attempt
      .retryWhen((err) => {
        return err.scan((retryCount, val) => {
                          retryCount += 1;
                          if (retryCount < 6) {
                            this.statusMessage = 'Retrying...Attempt #' + retryCount;
                            return retryCount;
                          }
                          else {
                            throw (err);
                          }
                        }, 0 /*seed: commence a compter a partir de 0*/).delay(1000)
      })
      .subscribe((dataResponse) => {
        if (dataResponse == null) {
          this.statusMessage = "This employee doesn't exist"
        } else {
          this.employee = dataResponse;
        }
      }, (error) => {
        this.statusMessage = 'Problem with the service';
        console.log(error);
      }); 

    //si on veut utiliser Promise au lieu de Observable
    //this._employeeService.getEmployee(codeToSearch)
    //  .then((dataResponse) => {
    //    if (dataResponse == null) {
    //      this.statusMessage = "This employee doesn't exist"
    //    } else {
    //      this.employee = dataResponse;
    //    }
    //  })
    //  .catch((error) => {
    //    this.statusMessage = 'Problem with the service';
    //    console.log(error)
    //  });
  }

  unsubscribe(): void {
    this.statusMessage = "Request is cancelled";
    this.subscription.unsubscribe();
  }
}
