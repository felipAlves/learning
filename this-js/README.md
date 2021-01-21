
O comportamento do `this` depende:

1 - `scope` ou `context`,
2 - `estrict mode`,

`Scope` 
    - **Acesso** às variáveis, funções e objtos numa parte do código, durante o tempo de execução.
    - Determina a **visbilidade** desses recursos em alguma parte do código
    - Sempre que invocamos uma função, estamos criando um novo `scope`

`Context`
    - Enquanto o `scope` se refere às diversas variáveis, o `context` se refere ao valor do `this` no mesmo `scope`
    - Pode ser mudado com funções especiais como: .apply(), .call() e .bind()
    - No contexto de execução `execution context` o `context` já não é mais esse `context` que estamos discutindo. Ele será o `scope`

Tipos de `scopes`

    1. Global
        . No momento que começamos a escrever código, estamo nesse contexto.
        . Existe enquanto existir a aplicação.
    2. Local 
        . Dentro de alguma função, variáveis estão no escopo(contexto) local.
        . Existe enquanto existir a função ou o objeto.


## Modo Estrito (strict mode)

- Muda a semântica do javascript
- É opcional 
- `"use strict"` para habilitar no contexto
- Elimina alguns erros silênciosos
- Evita algumas confusões
- Proíbe algumas sintaxes