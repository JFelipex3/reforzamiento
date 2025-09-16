import './style.css'

// import './bases/01-const-let';
// import './bases/02-template-string';
// import './bases/03-object-literal';
// import './bases/04-arrays';
// import './bases/05-functions';
// import './bases/06-obj-destructuring';
// import './bases/07-array-destructuring';
// import './bases/07-tarea-use-state';
// import './bases/08-imp-exp';
import './bases/09-promises';
//import { OwnerEnum } from './data/heroes.data';
//import { getHeoresByOwner } from './bases/08-imp-exp';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`;

//console.log(getHeoresByOwner(OwnerEnum.Marvel));
//console.log(getHeoresByOwner(OwnerEnum.DC));