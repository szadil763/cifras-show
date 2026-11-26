# Cifra no Palco

App para quem toca voz e violão em barzinho: repertório, setlist da noite e cifra rolando sozinha no tempo da música.

**App:** https://szadil763.github.io/cifras-show/

## Como instalar no celular

- **Android (Chrome):** abra o link e toque em **Instalar app** no topo (ou menu ⋮ → *Instalar app* / *Adicionar à tela inicial*).
- **iPhone (Safari):** abra o link, toque em **Compartilhar** e depois em **Adicionar à Tela de Início**.

Depois de instalado, o app abre em tela cheia e funciona **sem internet** (as músicas ficam salvas no aparelho).

## O que já funciona

- **Repertório**: cadastrar, colar e editar cifras no formato "acordes em cima da letra". Busca por música ou artista.
- **Foto → Cifra**: tira foto da cifra (caderno, apostila, print) e a IA transcreve com os acordes alinhados. Você revisa antes de salvar.
  - Só funciona na versão publicada no claude.ai, que usa a IA da conta Claude do usuário. Abrindo o `index.html` direto, essa função fica desativada.
- **Busca assistida**: digite o nome da música na busca. Se ela não está no repertório, o app oferece procurar a cifra no Cifra Club ou no Google. Ao voltar para o app, ele pergunta se você copiou a cifra e cola com um toque.
- **Colar inteligente**: cole a página copiada inteira. O app tira propagandas, menus e rodapé, pega título, artista e tom, marca as partes ([Intro], [Refrão]…) e anota capotraste. Na versão do claude.ai há também o botão **Organizar com IA** para cifras que perderam o alinhamento.
- **Roteiro da música (partes e repetições)**: o app entende as partes ([Intro], [Primeira Parte], [Refrão]…) e as indicações de repetição — uma parte escrita de novo só com o nome (`[Refrão]`, `Refrão`, `(Refrão 2x)`, `Repete o refrão`) volta ao trecho certo, e `(2x)` depois de uma estrofe repete a estrofe. O editor mostra o roteiro detectado e permite montar uma ordem personalizada.
- **Modo palco**:
  - rolagem automática calculada pela duração da música, com espera de introdução e contagem regressiva;
  - velocidade + e − (fica salva por música);
  - mudar o tom (transposição de meio em meio tom, escolhendo sustenido ou bemol pelo tom);
  - tamanho da letra automático ou manual;
  - **modo Saltar** (padrão): cada parte aparece uma vez, como na folha, e a rolagem segue o roteiro — ao terminar a estrofe, a tela vai direto até o refrão e depois volta para a estrofe seguinte. Alguns segundos antes, aparece o aviso "↑ Em seguida: Refrão". No pedal, `↓`/`↑` vão para a próxima/anterior parte. O botão **Corrido** mostra as repetições escritas em sequência, se preferir;
  - mapa de partes no topo: mostra onde você está e pula para qualquer parte com um toque;
  - botão **Repetir parte** (ou tecla `R`) para tocar o refrão mais uma vez quando o público pede — a velocidade não muda;
  - tela sempre ligada (Wake Lock) enquanto o palco está aberto;
  - pedal Bluetooth de virar página ou teclado: `Espaço` toca/pausa, `↓`/`PgDn` avança, `↑`/`PgUp` volta, `→` próxima música, `←` anterior.
- **Setlist**: ordem do show, tempo total e passagem automática para a próxima música.
- **Cronômetro**: mede a duração ouvindo a música (toca no relógio no começo e no fim).

## Onde os dados ficam

- No claude.ai: no banco do próprio artefato, privado para cada pessoa.
- Abrindo o arquivo direto: no navegador (`localStorage`) do aparelho.

## Próximos passos sugeridos

1. ~~App instalável (PWA)~~ feito. Próximo: publicar nas lojas (Play Store via TWA, ou app nativo com Flutter).
2. Backend próprio (ex.: Supabase) para login e backup.
3. Leitura de foto com API própria (Claude com visão) fora do claude.ai.
4. Rolagem por partes (tempo por estrofe) e, no futuro, rolagem que "escuta" o músico.
5. Exportar/importar no formato ChordPro.

## Direitos autorais

Cada usuário guarda o próprio repertório de forma privada. As músicas de exemplo são do folclore brasileiro (domínio público).
