import Home from "./pages/Home";
import Candidatelist from "./pages/Candidatelist/candidatelist";
import ResultCandidate from "./pages/Result/result";
import Login from "./components/login/login";
import CandidateForm from "./pages/admin";
import Registration from "./components/login/registrasi";
import Admintest from "./pages/admintest";
import Login2 from "./components/login/login2";

export const listRoute = [

    {path:'/',element: Home},
    {path:'/candidatelist',element: Candidatelist},
    {path:'/result',element: ResultCandidate},
    {path:'/login',element: Login},
    {path:'/login2',element: Login2},
    {path:'/admin',element: CandidateForm},
    {path:'/registrasi',element:Registration},
    {path:'/admintest',element:Admintest}
]
