import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-ver-documento',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './ver-documento.component.html',
  styleUrls: ['./ver-documento.component.css']
})
export class VerDocumentoComponent {
goBack() {
throw new Error('Method not implemented.');
}
  pdfSrc = 'src/assets/analisis-comparativo_MySQL-Oracle.pdf'; // Ruta del archivo PDF
}
