# vdirectives
directives for vue

##  v-jumberNumber [done]

from 0 to yourData in 1s with fixedStep(min Step eq 1)


## use
### install
```
npm install vdirectives
```

### import 

```
import vdirectives from "vdirectives"
Vue.use(vdirectives)

```

### usage
```
<h1 v-jumpNumber>1000</h1>
<span v-jumpNumber>-100</h1>
<div v-jumpNumber>1000%</div>
<div v-jumpNumber="4">10,000,000</div>
```


##  v-fullScreen

a simple set to enable a dom element to fill the whole screen



### usage
```
<div v-fullScreen>

.....

</div>

```