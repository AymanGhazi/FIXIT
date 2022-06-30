import { Component, OnInit, Input } from '@angular/core';
import { Pagination } from 'src/app/interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination!: Pagination;

  itemsPerPage: number = 10;
  totalPages: number = 0;  
  firstPage: number = 1;
  lastPage: number = 1;
  loopStartPage: number = 1;
  currentPage: number = 1;
  pagesPerWindow: number = 5;

  
  constructor() {
    this.pagination = {totalItems: 500};
    this.totalPages = Math.ceil(this.pagination.totalItems / this.itemsPerPage);
    this.lastPage = this.totalPages;
    this.loopStartPage = (this.currentPage > this.itemsPerPage) ? this.currentPage - this.itemsPerPage : 1;
  }

  getLoopStartPage(): number {
    this.loopStartPage = (this.currentPage > this.itemsPerPage) ? this.currentPage - this.itemsPerPage + 1 : 1;
    return this.loopStartPage;
  }
  
  nextPage(): number{
    this.currentPage++;
    return this.currentPage;
  }

  pagesCount(): number[]{
    return new Array(this.totalPages < this.pagesPerWindow ? this.totalPages : this.pagesPerWindow);
  }

  ngOnInit(): void {
  }

  gotoPage(page: number): void{
    this.currentPage = page;
  }

  gotoPrevWindow(): void {
    let currentWindowFirstPage = Math.floor(this.currentPage / this.itemsPerPage);
    this.gotoPage(currentWindowFirstPage > 1 ? (currentWindowFirstPage - 1) * this.itemsPerPage : 1);
  }

  gotoNextWindow(): void {
    let nextWindow = Math.ceil(this.currentPage / this.itemsPerPage)*this.pagesPerWindow + 1;
    this.gotoPage(nextWindow <= this.lastPage ? nextWindow : this.lastPage);
  }
}
