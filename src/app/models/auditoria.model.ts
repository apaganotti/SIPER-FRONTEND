// src/app/models/user.model.ts

import { Expose } from "class-transformer";
import { Solicitacao } from "./solicitacao.model";
import { Model } from "./Model";
import { TrilhaAuditoria } from "./trilha-auditoria.model";

 
 
@Expose()
export class Auditoria extends Model<Auditoria> {
 
  @Expose() solicitacao?: Solicitacao[];  // Tornando opcional
  @Expose() trilhaAuditoria?: TrilhaAuditoria[];  // Tornando opcional
 
  constructor(response?: any) {
    super();
    if (response) {
      this.solicitacao = response.solicitacao;
      this.trilhaAuditoria = response.trilhaAuditoria;
    }
  }
}
 