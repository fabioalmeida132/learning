# Exemplo de uma imagem custom

Neste exemplo, foi criado uma imagem com node 21, utilizando health check do docker.
Para isso, foi criado um endpoint /health que simula um health podendo retornar 200 ou 500 afim de teste.

Note que ao executar o docker ps, o status do container será exibido como healthy ou unhealthy.

## Gerando a imagem
A imagem possui como argumento a versão do nodejs que será instalada. Para gerar a imagem, execute o comando abaixo:

```bash
  docker build -t node-health-check .
```

## Executando o container
Para executar o container, execute o comando abaixo:

```bash
  docker run -d --rm -p 3030:3000 node-health-check
```