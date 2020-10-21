import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await getManager().find(Usuario);
        return usuarios;
    }

    async recuperarPorId(id: number) {
        const usuario = await getManager().findOne(Usuario, id);
        return usuario;
    }

    async recuperarLancamentosDoUsuario(idUsuario: number) {
        const usuario = await getManager().findOne(Usuario, idUsuario, {
            relations: ['lancamentos']
        });
        return usuario.lancamentos;
    }

    async recuperarLancamentosDasEntradasDoUsuario(idUsuario: number) {
        const lancamentos = await getManager().findOne(Usuario, idUsuario, {
            relations: ['lancamentos']
        });
        return lancamentos;
    }
    async recuperarLancamentosDosGastosPeloUsuario(idUsuario: number) {
        const lancamentos = await getManager().findOne(Usuario, idUsuario, {
            relations: ['lancamentos']
        });
        return lancamentos;
    }    

}