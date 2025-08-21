import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login","routes/login.tsx"),
    route("signup","routes/signup.tsx"),
    ...prefix("admin",[
        index("routes/dashboard.tsx"),
        layout("routes/layout.tsx",[
            index("pages/adminFastprofile.tsx")
            
        ])
        
    ])

   

] satisfies RouteConfig;
