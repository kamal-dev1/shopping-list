import { Routes } from "@angular/router";
import { TaskFormComponent } from "./task-form/task-form.component";

export const TaskRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    component: TaskFormComponent
  }
];
