// ARQUIVO DE CONFIGURAÇÃO COM O BANCO DE DADOS

import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("CONEXÃO COM O BANCO DE DADOS REALIZADO COM SUCESSO!"))
  .catch((err) => console.log("NÃO FOI POSSÍVEL CONECTAR AO BANCO ERRO:", err));