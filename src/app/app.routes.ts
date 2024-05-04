import { Routes } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

export const routes: Routes = [
    {path: 'tabela', component: TabelaComponent},
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: '', redirectTo: 'tabela', pathMatch:'full'}
];
