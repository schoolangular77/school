import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ActivitesComponent } from './activites/activites.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { FeesComponent } from './fees/fees.component';
import { StageoneComponent } from './stageone/stageone.component';
import { StagetowComponent } from './stagetow/stagetow.component';
import { StagefourComponent } from './stagefour/stagefour.component';
import { StagethreeComponent } from './stagethree/stagethree.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { EditMarkComponent } from './edit-mark/edit-mark.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        pathMatch:'full'
    },{
        path:"studentInfo",
        component:StudentInfoComponent,
        pathMatch:'full'
    },{
        path:"editMark",
        component:EditMarkComponent,
        pathMatch:'full'
    },
    {
        path:"activites",
        component:ActivitesComponent,
        pathMatch:'full'
    },{
        path:"student",
        component:StudentComponent,
        pathMatch:'full'
    },{
        path:"teacher",
        component:TeacherComponent,
        pathMatch:'full'
    },
    {
        path:"fees",
        component:FeesComponent,
        pathMatch:'full'
    },
    {
        path:"equipments",
        component:EquipmentsComponent,
        pathMatch:'full'
    },
    {
        path:"register",
        component:RegisterComponent,
        pathMatch:'full'
    },
    {
        path:"aboutus",
        component:AboutusComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"stageone",
        component:StageoneComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"login",
        component:LoginComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"stagetow",
        component:StagetowComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"stagethree",
        component:StagethreeComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"students",
        component:StudentsComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"stagefour",
        component:StagefourComponent,
        pathMatch:'full'
    }
    ,
    {
        path:"**",
        component:PagenotfoundComponent
    }
];
