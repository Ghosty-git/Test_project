import Contact from "../pages/Contact";
import CreateResume from "../pages/CreateResume";
import Home from "../pages/Home";
import Vacancies from "../pages/Vacancies";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VacanciesById from "../pages/VacanciesById";

export const routes = [
    {path:"/createresume", component:CreateResume, exact: true},
    {path:"/home", component:Home, exact: true},
    {path:"/vacancies", component:Vacancies, exact: true},
    {path:"/contact", component:Contact, exact: true},
    {path:"/register", component:Register, exact:true},
    {path:"/login", component:Login, exact:true},
    {path:"/vacancies/:id", component:VacanciesById, exact:true},
]

