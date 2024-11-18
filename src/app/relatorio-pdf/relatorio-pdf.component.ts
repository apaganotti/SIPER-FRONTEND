import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Solicitacao } from '../models/solicitacao.model';
import { Auditoria } from '../models/auditoria.model';
import { TutorialService } from '../services/tutorial.service';
import { TrilhaAuditoria } from '../models/trilha-auditoria.model';
 
 
@Component({
  selector: 'app-relatorio-pdf',
  templateUrl: './relatorio-pdf.component.html',
  styleUrls: ['./relatorio-pdf.component.css']
})
export class RelatorioPdfComponent implements OnInit {
 
  name = 'Angular Html To Pdf';
 
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;
 
  trilhasAuditoria: TrilhaAuditoria[] = [];
 
  solicitacao: Solicitacao[] = [];
 
  auditoria?: Auditoria;
 
  body?: any[] = [];
 
  constructor(private pagamentoService: TutorialService) {}  // Injetando o serviço PagamentoService
 
  ngOnInit(): void {
 
  }
 
  async downloadAsPDF() {
 
    try {
    await this.pagamentoService.getUsers().subscribe((data: Auditoria[]) => {
      const doc = new jsPDF('landscape', 'mm', 'a4');
 
      // Logo em base64 (substitua pelo base64 da sua imagem ou carregue dinamicamente)
      const logoBase64 = 'data:image/png;base64,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'; // Truncado para exemplo
 
      // Ajuste do tamanho do logo (largura: 50mm, altura: 20mm)
      doc.addImage(logoBase64, 'PNG', 10, -12, 50, 50); // Posiciona a imagem no topo esquerdo
 
      // Título do relatório ajustado para centralização
      doc.setFontSize(18);
      const pageWidth = doc.internal.pageSize.getWidth();
      const title = 'Relatório de Log Para Fins de Auditoria';
      const titleX = (pageWidth / 2) - (doc.getTextWidth(title) / 2); // Centraliza o título na página
      doc.text(title, titleX, 15); // Define a altura do título para alinhar com o logo
 
      // Cabeçalho da tabela
      const head = [['Data/Hora\nDescrição Ocorrência\nDispositivo', 'CPF\nNome\nTerminal/IP',  'Porta', 'Serviço/Detalhe\nGEO-Localização\nACCURACY', 'CONTA\nEMPREGADO\nSISTEMA', 'REDE TRANS']];
 
      this.auditoria = new Auditoria(data);
 
       // Mapeando os dados para o formato adequado
       const body = this.auditoria.trilhaAuditoria?.map((auditoria) => [
        `${auditoria.dataOcorrencia}/${auditoria.horaOcorrencia}\n${auditoria.ocorrencia}\n${auditoria.dispositivo}`,
        `${auditoria.nuCpf}-${auditoria.nuDvCpf}\n${auditoria.nomeCliente}\n${auditoria.terminal} / ${auditoria.ip}`,
        auditoria.porta,
        `${auditoria.servico}\n${auditoria.latitude}-${auditoria.longitude}-${auditoria.precisao}`,
        `${auditoria.nuConta}-${auditoria.nuDvConta}\n${auditoria.matricula}\n${auditoria.coSistema}`,
        auditoria.nuRedeTransmissora,
        //auditoria.nsuSiper,
        //auditoria.nuUnidade,
        //auditoria.nuProduto,
      ]);
 
      // Adiciona a tabela usando autoTable
      autoTable(doc, {
        head: head,
        body: body,
        startY: 35, // Ajusta a posição inicial da tabela
        theme: 'striped',
        headStyles: { fillColor: "#e7a97a" }, // Cor do cabeçalho
        styles: {
          fontSize: 9,
          cellWidth: 'auto',
          valign: 'middle'
        },
        columnStyles: {
          0: { cellWidth: 90, fontSize: 7 },
          1: { cellWidth: 50, fontSize: 7 },
          2: { cellWidth: 12, fontSize: 7  },
          3: { cellWidth: 50, fontSize: 7  },
          4: { cellWidth: 40, fontSize: 7  }
        },
      });
 
      // Salva o PDF
      doc.save('relatorio-de-auditoria.pdf');
    });
  }
 
catch (error: any) {
 
}
finally {
}
}
 
  
 
}
 