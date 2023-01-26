import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { ChartNodeComponent } from './chart-node/chart-node.component';
import { NodeSelectService } from './shared/services/node-select.service';
import { ChartNodeUlComponent } from './chart-node-ul/chart-node-ul.component';

@NgModule({
  declarations: [ChartContainerComponent, ChartNodeComponent, ChartNodeUlComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule
  ],
  exports: [ChartContainerComponent, ChartNodeComponent],
  providers: [NodeSelectService],
})
export class OrgchartModule { }
