import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { LoginAlertComponent } from '../alerts/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  rootViewContainer: any; // reference to where insert the alert

  // map of all available alerts
  modalsMap = {
    login: LoginAlertComponent
  };

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  // set container reference
  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  toggleAlert(name: string) {
    let factory; // why no typing? see next comment

    if(name in this.modalsMap) {
        factory = this.factoryResolver.resolveComponentFactory(this.modalsMap[name]);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.destroyAlert = () => component.destroy(); // connect destroy method to the function in component, somewhat dirty since component doesnt need to have destroyModal() method ;C
        component.instance.toggleAlert = (n) => this.toggleAlert(n);
        this.rootViewContainer.insert(component.hostView); // insert into view
    }
    else {
        throw new Error('Unknown '+name+' component');
    }
  }
}
