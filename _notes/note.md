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
    <router-outlet></router-outlet>sk
