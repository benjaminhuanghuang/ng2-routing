## Create project
    $ ng -v
    $ ng new <project> --skip-npm --routing
    $ cd <project>
    $ yarn          # using yarn to do npm install 


## App structure
```
    App(/)
        Home(/home)
            Home1(/home/home1)
            Home2(/home/home1)
            HomeDetail(/home/1)
        Second(/second)
```

## Create component
    $ ng g c home
    $ ng g c second
    
## Add link on index page (app.component.html)
    
    Type ul>li*2>a  and ng2-routerLink  

    Create <li><a [routerLink]="['/second'']">Second</a></li>

## Add router-outlet on index page (app.component.html)
    <router-outlet></router-outlet>

## Modify app-routing.module.ts
    Add routing config
    const appRoutes: Routes = [{},{}];

## Sub routing:

## Create component
    $ ng g c home/home1
    $ ng g c home/home2
    $ ng g c home/home-detail
    
    
## Add link on home page (home.component.html)
    
    Type ul>li*2>a  and ng2-routerLink  

    Create <li><a [routerLink]="['/second'']">Second</a></li>

## Add router-outlet on home page (app.component.html)
    <router-outlet></router-outlet>

## Modify app-routing.module.ts
    Add routing config
    Add children