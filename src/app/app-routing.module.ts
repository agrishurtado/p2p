import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'preguntase',
    loadChildren: () => import('./preguntase/preguntase.module').then(m => m.PreguntasePageModule)
  },
  {
    path: 'clasificados',
    loadChildren: () => import('./clasificados/clasificados.module').then( m => m.ClasificadosPageModule)
  },
  {
    path: 'clasificados-agregar-anuncio',
    loadChildren: () => import('./clasificados-agregar-anuncio/clasificados-agregar-anuncio.module').then( m => m.ClasificadosAgregarAnuncioPageModule)
  },
  {
    path: 'comunicados',
    loadChildren: () => import('./comunicados/comunicados.module').then( m => m.ComunicadosPageModule)
  },
  {
    path: 'comunicados-redactar',
    loadChildren: () => import('./comunicados-redactar/comunicados-redactar.module').then( m => m.ComunicadosRedactarPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'configuracion-config-condomino',
    loadChildren: () => import('./configuracion-config-condomino/configuracion-config-condomino.module').then( m => m.ConfiguracionConfigCondominoPageModule)
  },
  {
    path: 'configuracion-config-condomino-dos',
    loadChildren: () => import('./configuracion-config-condomino-dos/configuracion-config-condomino-dos.module').then( m => m.ConfiguracionConfigCondominoDosPageModule)
  },
  {
    path: 'configuracion-config-condomino-tres',
    loadChildren: () => import('./configuracion-config-condomino-tres/configuracion-config-condomino-tres.module').then( m => m.ConfiguracionConfigCondominoTresPageModule)
  },
  {
    path: 'configuracion-imagenes',
    loadChildren: () => import('./configuracion-imagenes/configuracion-imagenes.module').then( m => m.ConfiguracionImagenesPageModule)
  },
  {
    path: 'configuracion-contrasena',
    loadChildren: () => import('./configuracion-contrasena/configuracion-contrasena.module').then( m => m.ConfiguracionContrasenaPageModule)
  },
  {
    path: 'configuracion-imagenes/:id',
    loadChildren: () => import('./configuracion-imagenes/configuracion-imagenes.module').then( m => m.ConfiguracionImagenesPageModule)
  },
  {
    path: 'configuracion-registro-condomino/:id',
    loadChildren: () => import('./configuracion-registro-condomino/configuracion-registro-condomino.module').then( m => m.ConfiguracionRegistroCondominoPageModule)
  },
  {
    path: 'configuracion-registro-condomino-contrasena',
    loadChildren: () => import('./configuracion-registro-condomino-contrasena/configuracion-registro-condomino-contrasena.module').then( m => m.ConfiguracionRegistroCondominoContrasenaPageModule)
  },
  {
    path: 'directorio',
    loadChildren: () => import('./directorio/directorio.module').then( m => m.DirectorioPageModule)
  },
  {
    path: 'encuestas',
    loadChildren: () => import('./encuestas/encuestas.module').then( m => m.EncuestasPageModule)
  },
    
  {
    path: 'encuestas-crear-encuesta-generar',
    loadChildren: () => import('./encuestas-crear-encuesta-generar/encuestas-crear-encuesta-generar.module').then( m => m.EncuestasCrearEncuestaGenerarPageModule)
  },
  {
    path: 'encuestas-revisar-encuesta/:id',
    loadChildren: () => import('./encuestas-revisar-encuesta/encuestas-revisar-encuesta.module').then( m => m.EncuestasRevisarEncuestaPageModule)
  },
  {
    path: 'reservaciones',
    loadChildren: () => import('./reservaciones/reservaciones.module').then( m => m.ReservacionesPageModule)
  },
  {
    path: 'reservaciones-mis-reservaciones',
    loadChildren: () => import('./reservaciones-mis-reservaciones/reservaciones-mis-reservaciones.module').then( m => m.ReservacionesMisReservacionesPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'accesos',
    loadChildren: () => import('./accesos/accesos.module').then( m => m.AccesosPageModule)
  },
  {
    path: 'accesos-registrar-visita',
    loadChildren: () => import('./accesos-registrar-visita/accesos-registrar-visita.module').then( m => m.AccesosRegistrarVisitaPageModule)
  },
  {
    path: 'accesos-registrar-visita-dos/:id',
    loadChildren: () => import('./accesos-registrar-visita-dos/accesos-registrar-visita-dos.module').then( m => m.AccesosRegistrarVisitaDosPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'accesos-registrar-visita/:id',
    loadChildren: () => import('./accesos-registrar-visita/accesos-registrar-visita.module').then( m => m.AccesosRegistrarVisitaPageModule)
  },
  {
    path: 'comunicados-redactar/:id',
    loadChildren: () => import('./comunicados-redactar/comunicados-redactar.module').then( m => m.ComunicadosRedactarPageModule)
  },
  {
    path: 'clasificados-agregar-anuncio/:id',
    loadChildren: () => import('./clasificados-agregar-anuncio/clasificados-agregar-anuncio.module').then( m => m.ClasificadosAgregarAnuncioPageModule)
  },
  {
    path: 'tipos-visitas',
    loadChildren: () => import('./tipos-visitas/tipos-visitas.module').then( m => m.TiposVisitasPageModule)
  },
  {
    path: 'realizadas-visitas',
    loadChildren: () => import('./realizadas-visitas/realizadas-visitas.module').then( m => m.RealizadasVisitasPageModule)
  },
  {
    path: 'reservaciones-autorizadas',
    loadChildren: () => import('./reservaciones-autorizadas/reservaciones-autorizadas.module').then( m => m.ReservacionesAutorizadasPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'sos',
    loadChildren: () => import('./sos/sos.module').then( m => m.SosPageModule)
  },
  {
    path: 'ver-contactos',
    loadChildren: () => import('./ver-contactos/ver-contactos.module').then( m => m.VerContactosPageModule)
  },
  {
    path: 'ver-contactos-c',
    loadChildren: () => import('./ver-contactos-c/ver-contactos-c.module').then( m => m.VerContactosCPageModule)
  },
  {
    path: 'ver-contactos-p',
    loadChildren: () => import('./ver-contactos-p/ver-contactos-p.module').then( m => m.VerContactosPPageModule)
  },
  {
    path: 'ver-contactos-d',
    loadChildren: () => import('./ver-contactos-d/ver-contactos-d.module').then( m => m.VerContactosDPageModule)
  },
  {
    path: 'editcondomi/:id',
    loadChildren: () => import('./editcondomi/editcondomi.module').then( m => m.EditcondomiPageModule)
  },
  {
    path: 'editprover/:id',
    loadChildren: () => import('./editprover/editprover.module').then( m => m.EditproverPageModule)
  },
  {
    path: 'editmesad/:id',
    loadChildren: () => import('./editmesad/editmesad.module').then( m => m.EditmesadPageModule)
  },
  {
    path: 'conf-conf-menu',
    loadChildren: () => import('./conf-conf-menu/conf-conf-menu.module').then( m => m.ConfConfMenuPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar/configuracion-config-condomino-editar.module').then( m => m.ConfiguracionConfigCondominoEditarPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar-dos/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar-dos/configuracion-config-condomino-editar-dos.module').then( m => m.ConfiguracionConfigCondominoEditarDosPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar-tres/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar-tres/configuracion-config-condomino-editar-tres.module').then( m => m.ConfiguracionConfigCondominoEditarTresPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar-tres',
    loadChildren: () => import('./configuracion-config-condomino-eliminar-tres/configuracion-config-condomino-eliminar-tres.module').then( m => m.ConfiguracionConfigCondominoEliminarTresPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar-dos',
    loadChildren: () => import('./configuracion-config-condomino-eliminar-dos/configuracion-config-condomino-eliminar-dos.module').then( m => m.ConfiguracionConfigCondominoEliminarDosPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar',
    loadChildren: () => import('./configuracion-config-condomino-eliminar/configuracion-config-condomino-eliminar.module').then( m => m.ConfiguracionConfigCondominoEliminarPageModule)
  },
  {
    path: 'mensajes-contactos/:id',
    loadChildren: () => import('./mensajes-contactos/mensajes-contactos.module').then( m => m.MensajesContactosPageModule)
  },
  {
    path: 'mensajes-privados',
    loadChildren: () => import('./mensajes-privados/mensajes-privados.module').then( m => m.MensajesPrivadosPageModule)
  },
  {
    path: 'mensajes-publicos',
    loadChildren: () => import('./mensajes-publicos/mensajes-publicos.module').then( m => m.MensajesPublicosPageModule)
  },
  {
    path: 'mensajes-siniestros',
    loadChildren: () => import('./mensajes-siniestros/mensajes-siniestros.module').then( m => m.MensajesSiniestrosPageModule)
  },
  {
    path: 'mensajes-policiacos',
    loadChildren: () => import('./mensajes-policiacos/mensajes-policiacos.module').then( m => m.MensajesPoliciacosPageModule)
  },
  {
    path: 'menumensajes',
    loadChildren: () => import('./menumensajes/menumensajes.module').then( m => m.MenumensajesPageModule)
  },
  {
    path: 'balancemantenimiento',
    loadChildren: () => import('./balancemantenimiento/balancemantenimiento.module').then( m => m.BalancemantenimientoPageModule)
  },
  {
    path: 'balanceareascomunes',
    loadChildren: () => import('./balanceareascomunes/balanceareascomunes.module').then( m => m.BalanceareascomunesPageModule)
  },
  {
    path: 'balancemenu',
    loadChildren: () => import('./balancemenu/balancemenu.module').then( m => m.BalancemenuPageModule)
  },
  {
    path: 'balancegastos',
    loadChildren: () => import('./balancegastos/balancegastos.module').then( m => m.BalancegastosPageModule)
  },
  {
    path: 'encuestastitulos',
    loadChildren: () => import('./encuestastitulos/encuestastitulos.module').then( m => m.EncuestastitulosPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'balancesubtitulos',
    loadChildren: () => import('./balancesubtitulos/balancesubtitulos.module').then( m => m.BalancesubtitulosPageModule)
  },
  {
    path: 'balanceporautorizar',
    loadChildren: () => import('./balanceporautorizar/balanceporautorizar.module').then( m => m.BalanceporautorizarPageModule)
  },
  {
    path: 'answers/:id/:titulo',
    loadChildren: () => import('./answers/answers.module').then( m => m.AnswersPageModule)
  },


{
    path: 'balanceporautorizareditar/:id',
    loadChildren: () => import('./balanceporautorizareditar/balanceporautorizareditar.module').then( m => m.BalanceporautorizareditarPageModule)
  },
  {
    path: 'balanceporautorizareditarareas/:id',
    loadChildren: () => import('./balanceporautorizareditarareas/balanceporautorizareditarareas.module').then( m => m.BalanceporautorizareditarareasPageModule)
  },
  {
    path: 'balanceporautorizareditarmantenimineto/:id',
    loadChildren: () => import('./balanceporautorizareditarmantenimineto/balanceporautorizareditarmantenimineto.module').then( m => m.BalanceporautorizareditarmanteniminetoPageModule)
  },
  {
    path: 'img-modal',
    loadChildren: () => import('./img-modal/img-modal.module').then( m => m.ImgModalPageModule)
  },
  {
    path: 'ver-contactos-d',
    loadChildren: () => import('./ver-contactos-d/ver-contactos-d.module').then( m => m.VerContactosDPageModule)
  },
  {
    path: 'editcondomi/:id',
    loadChildren: () => import('./editcondomi/editcondomi.module').then( m => m.EditcondomiPageModule)
  },
  {
    path: 'editprover/:id',
    loadChildren: () => import('./editprover/editprover.module').then( m => m.EditproverPageModule)
  },
  {
    path: 'editmesad/:id',
    loadChildren: () => import('./editmesad/editmesad.module').then( m => m.EditmesadPageModule)
  },
  {
    path: 'conf-conf-menu',
    loadChildren: () => import('./conf-conf-menu/conf-conf-menu.module').then( m => m.ConfConfMenuPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar/configuracion-config-condomino-editar.module').then( m => m.ConfiguracionConfigCondominoEditarPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar-dos/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar-dos/configuracion-config-condomino-editar-dos.module').then( m => m.ConfiguracionConfigCondominoEditarDosPageModule)
  },
  {
    path: 'configuracion-config-condomino-editar-tres/:id',
    loadChildren: () => import('./configuracion-config-condomino-editar-tres/configuracion-config-condomino-editar-tres.module').then( m => m.ConfiguracionConfigCondominoEditarTresPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar-tres',
    loadChildren: () => import('./configuracion-config-condomino-eliminar-tres/configuracion-config-condomino-eliminar-tres.module').then( m => m.ConfiguracionConfigCondominoEliminarTresPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar-dos',
    loadChildren: () => import('./configuracion-config-condomino-eliminar-dos/configuracion-config-condomino-eliminar-dos.module').then( m => m.ConfiguracionConfigCondominoEliminarDosPageModule)
  },
  {
    path: 'configuracion-config-condomino-eliminar',
    loadChildren: () => import('./configuracion-config-condomino-eliminar/configuracion-config-condomino-eliminar.module').then( m => m.ConfiguracionConfigCondominoEliminarPageModule)
  },
  {
    path: 'mensajes-contactos/:id',
    loadChildren: () => import('./mensajes-contactos/mensajes-contactos.module').then( m => m.MensajesContactosPageModule)
  },
  {
    path: 'mensajes-privados',
    loadChildren: () => import('./mensajes-privados/mensajes-privados.module').then( m => m.MensajesPrivadosPageModule)
  },
  {
    path: 'mensajes-publicos',
    loadChildren: () => import('./mensajes-publicos/mensajes-publicos.module').then( m => m.MensajesPublicosPageModule)
  },
  {
    path: 'mensajes-siniestros',
    loadChildren: () => import('./mensajes-siniestros/mensajes-siniestros.module').then( m => m.MensajesSiniestrosPageModule)
  },
  {
    path: 'mensajes-policiacos',
    loadChildren: () => import('./mensajes-policiacos/mensajes-policiacos.module').then( m => m.MensajesPoliciacosPageModule)
  },
  {
    path: 'menumensajes',
    loadChildren: () => import('./menumensajes/menumensajes.module').then( m => m.MenumensajesPageModule)
  },
  {
    path: 'balancemantenimiento',
    loadChildren: () => import('./balancemantenimiento/balancemantenimiento.module').then( m => m.BalancemantenimientoPageModule)
  },
  {
    path: 'balanceareascomunes',
    loadChildren: () => import('./balanceareascomunes/balanceareascomunes.module').then( m => m.BalanceareascomunesPageModule)
  },
  {
    path: 'balancemenu',
    loadChildren: () => import('./balancemenu/balancemenu.module').then( m => m.BalancemenuPageModule)
  },
  {
    path: 'balancegastos',
    loadChildren: () => import('./balancegastos/balancegastos.module').then( m => m.BalancegastosPageModule)
  },
  {
    path: 'encuestastitulos',
    loadChildren: () => import('./encuestastitulos/encuestastitulos.module').then( m => m.EncuestastitulosPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'balancesubtitulos/:id',
    loadChildren: () => import('./balancesubtitulos/balancesubtitulos.module').then( m => m.BalancesubtitulosPageModule)
  },
  {
    path: 'balanceporautorizar',
    loadChildren: () => import('./balanceporautorizar/balanceporautorizar.module').then( m => m.BalanceporautorizarPageModule)
  },
  {
    path: 'answers/:id/:titulo',
    loadChildren: () => import('./answers/answers.module').then( m => m.AnswersPageModule)
  },


{
    path: 'balanceporautorizareditar/:id',
    loadChildren: () => import('./balanceporautorizareditar/balanceporautorizareditar.module').then( m => m.BalanceporautorizareditarPageModule)
  },
  {
    path: 'balanceporautorizareditarareas/:id',
    loadChildren: () => import('./balanceporautorizareditarareas/balanceporautorizareditarareas.module').then( m => m.BalanceporautorizareditarareasPageModule)
  },
  {
    path: 'balanceporautorizareditarmantenimineto/:id',
    loadChildren: () => import('./balanceporautorizareditarmantenimineto/balanceporautorizareditarmantenimineto.module').then( m => m.BalanceporautorizareditarmanteniminetoPageModule)
  },
  {
    path: 'reservaciones-mis-reservaciones-editar/:id',
    loadChildren: () => import('./reservaciones-mis-reservaciones-editar/reservaciones-mis-reservaciones-editar.module').then( m => m.ReservacionesMisReservacionesEditarPageModule)
  },
  {
    path: 'reservaciones-mis-reservaciones-editardos/:id',
    loadChildren: () => import('./reservaciones-mis-reservaciones-editardos/reservaciones-mis-reservaciones-editardos.module').then( m => m.ReservacionesMisReservacionesEditardosPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
