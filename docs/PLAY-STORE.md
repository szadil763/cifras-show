# Publicar o Cifra no Palco na Play Store

O app já é um PWA (instalável pelo navegador). Para a Play Store, ele é "embrulhado" num app Android do tipo **TWA (Trusted Web Activity)**: o app da loja abre o site em tela cheia, sem barra do navegador. Atualizações no site chegam sozinhas ao app da loja; só é preciso mandar uma versão nova para a loja quando mudar nome, ícone ou cores.

## O que o app já tem (exigências da loja)

| Exigência | Onde está |
|---|---|
| Manifesto com nome, ícones 192/512 e ícone "maskable" | `manifest.webmanifest`, `icons/` |
| Funciona sem internet (service worker) | `sw.js` |
| Política de privacidade com endereço público | https://szadil763.github.io/cifras-show/privacidade.html |
| Excluir a conta dentro do app | Ícone de pessoa → **Excluir minha conta** |
| Endereço para pedir exclusão sem o app | https://szadil763.github.io/cifras-show/privacidade.html#excluir |

## Passo a passo

### 1. Conta de desenvolvedor
- Crie a conta em https://play.google.com/console (taxa única de **US$ 25** e verificação de identidade).
- **Contas pessoais criadas depois de 13/11/2023** precisam fazer um **teste fechado com pelo menos 12 testadores, por 14 dias seguidos**, antes de liberar o app para todos. Contas de organização não têm essa exigência. Comece a juntar os testadores cedo (amigos músicos, colegas de banda).

### 2. Gerar o pacote Android (PWABuilder)
1. Abra https://www.pwabuilder.com e digite `https://szadil763.github.io/cifras-show/`.
2. Toque em **Package for stores → Android → Generate package**.
3. Sugestões de preenchimento:
   - **Package ID:** `io.github.szadil763.cifrapalco` (não dá para mudar depois)
   - **App name:** Cifra no Palco · **Short name:** Cifra Palco
   - **Display mode:** standalone · **Status bar / Splash color:** `#12161d`
4. Baixe o `.zip`. Ele traz:
   - o arquivo **`.aab`** (o que vai para a loja);
   - a **chave de assinatura** (`signing.keystore`) e as senhas: **guarde em lugar seguro**. Sem ela não dá para publicar atualizações;
   - o arquivo **`assetlinks.json`**.

### 3. Ligar o site ao app (assetlinks.json)
Sem este passo, o app abre com uma barra de endereço do navegador no topo.

O arquivo precisa estar na **raiz do domínio**: `https://szadil763.github.io/.well-known/assetlinks.json`. Como o app está em `/cifras-show/`, é preciso um segundo repositório:

1. No GitHub, crie um repositório público chamado exatamente **`szadil763.github.io`**.
2. Coloque nele:
   - `.well-known/assetlinks.json` (o arquivo que veio do PWABuilder);
   - um arquivo vazio chamado `.nojekyll` (sem ele, o GitHub Pages ignora pastas que começam com ponto).
3. Em *Settings → Pages* desse repositório, publique a partir da branch `main`.
4. Confira abrindo https://szadil763.github.io/.well-known/assetlinks.json: deve aparecer o conteúdo do arquivo.

> Se a Play Store reassinar o app (o padrão, "Play App Signing"), adicione também ao `assetlinks.json` a impressão digital SHA-256 que aparece em *Play Console → Configuração → Integridade do app → Assinatura do app*. O arquivo aceita várias impressões digitais na lista.

### 4. Criar o app no Play Console
1. **Criar app** → nome "Cifra no Palco", idioma Português (Brasil), tipo App, gratuito.
2. **Ficha da loja:**
   - descrição curta (até 80 caracteres), ex.: *Cifras que rolam no tempo da música, setlist e modo palco para músicos.*
   - ícone 512×512 (`icons/icon-512.png`);
   - imagem de destaque 1024×500;
   - pelo menos 2 capturas de tela do celular (repertório, palco tocando, setlist).
3. **Política de privacidade:** `https://szadil763.github.io/cifras-show/privacidade.html`
4. **Classificação do conteúdo:** responder o questionário (app de utilidade/música, sem conteúdo sensível).
5. **Público-alvo:** maiores de 13 anos.
6. **Segurança dos dados** (respostas de acordo com o app):

| Pergunta | Resposta |
|---|---|
| Coleta dados? | Sim, só para quem cria conta |
| Endereço de email | Coletado · obrigatório para a conta · finalidade: gerenciamento da conta |
| Conteúdo do usuário (músicas, anotações) | Coletado · finalidade: funcionalidade do app |
| Compartilhado com terceiros? | Não |
| Criptografado em trânsito? | Sim (HTTPS) |
| O usuário pode pedir exclusão? | Sim, no app e pelo endereço da política (#excluir) |
| Anúncios / análise / rastreamento | Não |

7. **Exclusão de conta:** informe `https://szadil763.github.io/cifras-show/privacidade.html#excluir`.

### 5. Teste fechado e lançamento
1. Em *Testes → Teste fechado*, crie uma faixa, envie o `.aab` e adicione os emails dos testadores.
2. Mande o link de convite. Cada testador precisa aceitar e manter o app instalado.
3. Depois dos 14 dias com 12 testadores, peça o **acesso à produção** no Play Console (ele pergunta como foi o teste).
4. Aprovado, envie a mesma versão para *Produção*.

## Antes de enviar, confira
- [ ] Supabase → *Authentication → URL Configuration*: Site URL = `https://szadil763.github.io/cifras-show/`
- [ ] Criar conta, confirmar email, entrar e sincronizar funcionam no celular
- [ ] Excluir conta funciona (teste com uma conta de teste)
- [ ] `assetlinks.json` abre na raiz do domínio
- [ ] O app instalado pela faixa de teste abre sem barra de endereço
