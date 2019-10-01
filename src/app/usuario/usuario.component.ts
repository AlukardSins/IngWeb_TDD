import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarioActivo: boolean;

  constructor() { }

  ngOnInit() {
  }

  activarUsuario(): void {
    this.usuarioActivo = true;
  }

}
