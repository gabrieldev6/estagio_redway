# Use uma imagem base do Node.js
FROM node:lts as development

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração e dependências do projeto para o contêiner
COPY src src
COPY package*.json .
COPY tsconfig.node.json .
COPY tsconfig.json .

RUN npm install -g npm@10.5.0

# Instale as dependências
RUN npm install 

# Exponha a porta em que o servidor estará escutando
EXPOSE 5173

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
