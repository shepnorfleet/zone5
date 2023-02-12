# Zone5 (starter)

Caveat: Not currently in a working state.

## Introduction

The purpose of the project is to create a starter that provides 'Boot-Like' Express Framework focused on rapid CRUD microservice production.

### Goals

-   Using typescript decorators to provide some of the useful automation found in Spring Boot \*.
-   Provide a GraphQL style query language to control what is returned by the service.
    -   Model decorators will auto-resolve missing graphQL foreign relationship references.
-   Generating CRUD Classes from the database for rapid prototyping.
    -   Controllers
    -   Services
    -   Models
-   Package the starter to make package that can be distributed on yarn or npm repositories.

### Risks

The approach employed has some notable risks. The risks entail either early end-of-life for the capability to lack of flexability in the approach that might diminish, if not eliminate, its applicability as a solution.

#### Identification

1.  decorators in typescript are still identified as experimental, and perhaps always will.
2.  Tying Controllers and Services to a single Model is too opinionated.
3.  Providing a complete Spring Boot\* capability is impossible due typescript not actually being a language that can convey types to the operational system. For instance, the '@Autowired' java annoation is not as straight-forward in typescript.

```java
@Controller
public class MyController {
    @Autowired
    private service MyService;
}
```

#### Mitigation

1.  The creator of typescript 'Anders Hejlsberg', has repeatly stated that decorators are not going anywhere. In fact typescript decorators are used throughout Angular's typescript implementation.
2.  Then initial goal is to provide CRUD operations on a table (model). This does not limit future capability to create non -CRUD focused controllers in the future that are not so tightly tied to a single service and model. To leave this open all Crud controllers are based on the CrudController base class. Theoretically we could create another approach not focused on CRUD operations on a single table.
3.  There is a workaround; the developer may provide the constructor function to the typescript decorator so that it may accomplish the same effect.

```typescript
@Controller('my/')
class MyController extends CrudController<MyModel> {
    @Autowired(MyService)
    private service: MyService;
}
```

### Foot Notes

## Reference

### Controllers

#### Decorators

### Services

### Models

#### Decorators

\* Spring Boot is a registered trade mark of Pivotal
