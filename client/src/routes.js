import Dashboard from "./views/Dashboard.js"
import Management from "./views/Management.js"
import UserPage from "./views/User.js"
import UpgradeToPro from "./views/Upgrade.js"
import Configuration from "./views/Configuration.js"
import Bulletin from "./views/Bulletin.js"

var routes = [
  {
    path: "/dashboard",
    name: "Bảng tin",
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
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/management",
    name: "Quản lý",
    icon: "nc-icon nc-tile-56",
    component: Management,
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
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
