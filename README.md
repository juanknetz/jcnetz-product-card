# jcnetz-product-card

Este en un paquete de pruebas de despliegue en NPM

### Juan Carlos Netz Escalante

## Ejemplo

```
import {ProductButtons,ProductCard,ProductImage,ProductTitle} from "jcnetz-product-card";
```

```
<ProductCard
        product={product}
        initialValues={{ count: 3, maxCount: 10 }}
      >
        {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```