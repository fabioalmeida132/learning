# Exemplo de uma imagem custom

Neste exemplo, foi criado uma imagem customizada para o nodejs com express.
Foi adicionado ENV e ARGS para a imagem.

- ENV: Variáveis de ambiente que são utilizados na execução da imagem.
- ARGS: Argumentos que são passados no momento da criação da imagem.

## Gerando a imagem
A imagem possui como argumento a versão do nodejs que será instalada. Para gerar a imagem, execute o comando abaixo:

```bash
  docker build --build-arg NODE_VERSION=21 -t node-app .
```

## Executando o container
Para executar o container, execute o comando abaixo:

```bash
  docker run -d --rm -p 3030:3000 node-app
```

## Executando o container com variáveis de ambiente
Para executar o container com variáveis de ambiente, execute o comando abaixo:

```bash
  docker run -d --rm -p 3030:3000 -e MESSAGE="Hello World Custom!" node-app
```
