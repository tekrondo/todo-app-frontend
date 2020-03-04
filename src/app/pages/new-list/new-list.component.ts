import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  createList(title: string) {
    this.taskService.createList(title).subscribe((response: any) =>{
      console.log(response)
    })
  }

}
