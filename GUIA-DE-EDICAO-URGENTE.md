# GUIA DE EDIÇÃO URGENTE — GPS.dev AgroCore

## ACESSO ÚNICO PARA ALTERAÇÕES RÁPIDAS

Para quase qualquer alteração urgente, abra SOMENTE:

`config/conteudo.js`

Nesse arquivo você consegue trocar:
- nome da marca;
- slogan;
- e-mail;
- WhatsApp;
- GitHub;
- portfólio;
- link do aplicativo;
- preços SaaS;
- benefícios de cada plano;
- livros e links publicados.

## CORES

Se precisar trocar cores, abra:

`css/style.css`

As cores oficiais estão logo nas primeiras linhas, dentro de `:root`.

## TESTAR NO VS CODE

1. Abra a pasta `gpsdev-agrocore` no VS Code.
2. Abra `index.html`.
3. Use Live Server, se tiver instalado, ou abra o arquivo no navegador.
4. Teste todos os links antes de publicar.

## PUBLICAÇÃO

A versão anterior NÃO deve ser excluída.
Publique esta nova casa em outro repositório/serviço primeiro.
Depois de validar, conecte o domínio/URL oficial.

## APLICATIVO ATUAL PRESERVADO

O botão Entrar aponta para:
`https://agrodigital-mobile.onrender.com/`

Assim, a nova landing pode evoluir sem quebrar o aplicativo que já está funcionando.


## BLOG, REDES E SEO

No mesmo `config/conteudo.js` você também pode trocar:
- Blog WordPress
- LinkedIn
- YouTube
- Medium
- Substack

O menu `Blog` abre seu WordPress em nova aba.
Os outros canais ficam no rodapé como links externos.

## COMO FUNCIONAM OS LINKS DO MENU

- `Início`, `AgroCore`, `Planos`, `Portfólio`, `Livros`, `Sobre` e `Contato` são páginas internas do projeto.
- `Blog` é um link externo e abre em uma nova aba.
- `Entrar` leva ao AgroCore Mobile funcional.
- O menu permanece fixo no topo durante a navegação.
