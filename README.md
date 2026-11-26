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
- **Modo palco**:
  - rolagem automática calculada pela duração da música, com espera de introdução e contagem regressiva;
  - velocidade + e − (fica salva por música);
  - mudar o tom (transposição de meio em meio tom, escolhendo sustenido ou bemol pelo tom);
  - tamanho da letra automático ou manual;
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
