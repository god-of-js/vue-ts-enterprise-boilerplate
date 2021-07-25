# Routing - Layouts, Views

### Generation of Route modules

The Generation of route modules has been automated using hygen. To generate a Module run the commands

```

hygen RouteModule new [ROUTE_MODULE_NAME]
hygen layout new [LAYOUT_NAME]

```

This two commands would automatically generate the RouteModule with the default structure which imports LAYOUT_NAME as a base route and has a children Array where children would be placed.
RouteModules are to be imported into the index.ts placed in the root of the router directory.

### Views

Creation of views is not automated because this directory allows nesting of files depending on complexity of the application. It would need to be created manually but with the set standard.
Views are to be placed in the children section of the RouteModule.
