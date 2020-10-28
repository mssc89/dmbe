import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../modals/login/login.component';
import { RegisterComponent } from '../modals/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  rootViewContainer: any; // reference to where insert the modal

  // map of all available modals
  modalsMap = {
    login: LoginComponent,
    register: RegisterComponent
  };

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  // set container reference
  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  toggleModal(name: string) {
    let factory; // why no typing? see next comment

    if(name in this.modalsMap) {
        factory = this.factoryResolver.resolveComponentFactory(this.modalsMap[name]);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.destroyModal = () => component.destroy(); // connect destroy method to the function in component, somewhat dirty since component doesnt need to have destroyModal() method ;C
        component.instance.toggleModal = (n) => this.toggleModal(n);
        this.rootViewContainer.insert(component.hostView); // insert into view
    }
    else {
        throw new Error('Unknown '+name+' component');
    }
  }
}
