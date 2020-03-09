import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[];
  tasks: any[];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
        this.taskService.getTasks(params.listId).subscribe((tasks: any[]) => {
          this.tasks = tasks;
        });
      }
    )

    this.taskService.getLists().subscribe((lists: any[]) => {
      let urlValue = this.route.url._value[1];
      
      if( urlValue== undefined) {
        this.router.navigateByUrl(`lists/${lists[0]._id}`)
      } else {
        this.lists = lists;
      }
    });
  }

}
