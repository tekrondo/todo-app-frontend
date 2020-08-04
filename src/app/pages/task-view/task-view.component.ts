import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  onTaskCompleted(task: Task) {
    console.log(task)
    this.taskService.completed(task).subscribe(() => {
      console.log("Completed Successfully");
      task.completed = !task.completed;
    })
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      if(params.listId){
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      }else{
        this.tasks = undefined
      }

      }
    )

    this.taskService.getLists().subscribe((lists: List[]) => {
      // @ts-ignore this will cause typescript to ignore the error of Property '_value' does not exist on type 'Observable<UrlSegment[]> since _value is undefined on page load.
      let urlValue = this.route.url._value[1];
      
      if( urlValue== undefined) {
        this.router.navigateByUrl(`lists/${lists[0]._id}`)
      } else {
        this.lists = lists;
      }
    });
  }

}
