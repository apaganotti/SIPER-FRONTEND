// src/app/models/auditoria.model.ts
export interface TrilhaAuditoria {
  dataOcorrencia: string;
  horaOcorrencia: string;
  nsuSiper: number;
  nuCpf: number;
  nuDvCpf: number;
  nomeCliente: string;
  nuUnidade: number;
  nuProduto: number;
  nuConta: number;
  nuDvConta: number;
  ocorrencia: string;
  coSistema: string;
  nuRedeTransmissora: number;
  servico: string;
  matricula: string;
  dispositivo: string;
  terminal: string;
  ip: string;
  porta: number;
  latitude: number;
  longitude: number;
  precisao: number;
}
 