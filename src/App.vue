

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
<script>

import { useCounterStore } from './store/store.js'
import { computed } from 'vue'
export default {
  setup() {
    const store = useCounterStore()

    const count = computed(() => store.count)

    const increment = () => {
      store.increment()
    }

    const decrement = () => {
      store.decrement()
    }

    return {
      count,
      increment,
      decrement
    }
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
