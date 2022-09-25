<template>
  <div class="root">
    <ul class="cards">
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
      <li class="cards_item">
        <TestCard :title="card.title"
                  :items="card.items"
                  :currency="card.currency"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TestCard from "@/components/TestCard";

export default {
  name: 'App',
  components: {
    TestCard
  },
  data: () => ({
    card: {
      title: "Баланс",
      items: [
        {name: "Начальный долг", value: 100446123.08},
        {name: "Начислено за период", value: 69213422.91},
        {name: "Оплачено за период", value: 151294120.15},
        {name: "Задолженность", value: 10354128.84}
      ]
    }
  })
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 1200px;
  margin: 0 auto;

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    .cards_item {
      display: flex;
      padding: 1rem;
    }
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

}
</style>
