// src/app/models/solicitacao.model.ts
export interface Solicitacao {
  id: number;               // Identificador único da solicitação
  descricao: string;        // Descrição da solicitação
  dataSolicitacao: string;  // Data em que a solicitação foi feita
  status: string;           // Status da solicitação (ex: "Em andamento", "Concluída")
  prioridade: string;       // Prioridade da solicitação (ex: "Baixa", "Média", "Alta")
  solicitante: string;      // Nome do solicitante
  dataConclusao?: string;   // Data de conclusão (opcional)
  comentario?: string;      // Comentários adicionais (opcional)
}