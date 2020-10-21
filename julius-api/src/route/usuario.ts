import { Usuario } from './../entity/Usuario';
import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
* Serviço pra salvar um novo usuario 
 */
routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
    /**routerUsuario.post('/', async (req, res) => {
     * const dados = req.body;
    *const usuario = new Usuario(dados.nome, dados.email);
    *usuario.nome = dados.nome;
    *usuario.email = dados.email;
    */

    /**
     * Serviço para recuperar todos os usuários
     */
    routerUsuario.get('/', async (req, res) => {
        const usuarios = await usuarioCtrl.recuperarTodos();
        res.json(usuarios);
    });

    /**
     * Serviço para recuperar os lançamentos de um determinado usuario  
     */
    routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
        const idUsuario = parseInt(req.params.idUsuario);
        const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
        res.json(lancamentos);
    });    
});
