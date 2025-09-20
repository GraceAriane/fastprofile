import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login","routes/login.tsx"),
    route("signup","routes/signup.tsx"),
    ...prefix("admin",[
        index("routes/admin.tsx"),
        layout("routes/layout.tsx",[
            index("pages/adminFastprofile.tsx"),
            route("insights", "routes/insights.tsx")
        ]),
        route("design","routes/design.tsx")
        
    ]),
    route("dashboard","routes/dashboard.tsx"),
    route("tchoukeugrace", "routes/preview.tsx")
   

] satisfies RouteConfig;
