import Dashboard from "./views/Dashboard"
import Management from "./views/Management"
import UserPage from "./views/User"
import Finance from "./views/Finance"
import Configuration from "./views/Configuration"
import Bulletin from "./views/Bulletin"

var routes = [
  {
    path: "/dashboard",
    name: "Điều hành",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/bulletin",
    name: "Thông báo",
    icon: "nc-icon nc-bullet-list-67",
    component: Bulletin,
    layout: "/admin"
  },
  {
    path: "/management",
    name: "Quản lý",
    icon: "nc-icon nc-tile-56",
    component: Management,
    layout: "/admin"
  },
  {
    path: "/finance",
    name: "Tài chính",
    icon: "nc-icon nc-money-coins",
    component: Finance,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Hồ sơ cá nhân",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/configuration",
    name: "Thiết lập",
    icon: "nc-icon nc-settings",
    component: Configuration,
    layout: "/admin"
  }
];
export default routes;
