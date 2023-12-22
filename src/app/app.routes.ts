import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "task",
    loadChildren: () => import("./tasks/task.routes").then((m) => m.TaskRoutes),
  }
];
