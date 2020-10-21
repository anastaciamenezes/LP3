import { getManager } from "typeorm";
import { Lancamento } from "../entity/Lancamento";

export class LancamentoController {

    async salvar(lancamento: Lancamento) {
        const lancamentoSalvo = await getManager().save(lancamento);
        return lancamentoSalvo;
    }

    async alterarLancamento(id:number, lancamento: Lancamento) {
        const lancamentoAlterado = await getManager().findOne(Lancamento,id);
        return lancamentoAlterado;
    }

    async deletarLancamento(id: number){
        const lancamento = await getManager().delete(Lancamento, id);
        return;
    }

    async recuperarPorId(id: number) {
        const lancamento = await getManager().findOne(Lancamento, id);
        return lancamento;
    }

    async recuperarLancamentosDasEntradasDoUsuario(id: number, idUsuario) {
        const lancamentos = await getManager().findOne(Lancamento, idUsuario);
        return lancamentos;
    }

    async recuperarLancamentosDosGastosDoUsuario(id: number, idUsuario) {
        const lancamentos = await getManager().findOne(Lancamento, idUsuario);
        return lancamentos;
    }
} 