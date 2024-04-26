import buscaReducer, { mudarBusca, resetarBusca } from './busca'

describe("Testando busca reducer", () => {
    test("Deve mudar busca como esperado", () => {
        expect(buscaReducer('', mudarBusca('teste'))).toEqual('teste')
    })
    test("Deve resetar valor da busca", () => {
        expect(buscaReducer('outro valor', resetarBusca())).toEqual('')
    })
})