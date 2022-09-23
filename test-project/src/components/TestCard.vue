<template>
  <div class="card-wrapper">
    <div class="card_title"> {{ title }} </div>
    <div class="card">
      <div class="card_content">
        <div class="items">
          <ul>
            <li v-for="item in items" :key="item.name">{{ item.name }}</li>
          </ul>
        </div>
        <div class="values">
          <ul>
            <li v-for="item in items" :key="item.value">{{ item.value.toLocaleString('en-US').replaceAll(',',' ') }} <span class="currency">{{ currency }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    currency: {
      type: String,
      default: 'руб.',
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card_title {

  font-size: calc(14px + 0.390625vw);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card {
  background-color: white;
  border-radius: 0.625rem;
  border-left: 10px solid royalblue;
  box-shadow: 0px 5px 15px -3px black;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .card_content {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    /*font-size: calc(0.6em + 1vmin);*/
    font-size: calc(10px + 0.390625vw);

    ul {
      list-style: none;
      padding-inline-start: 0.625rem;
      padding-inline-end: 0.625rem;
      li {
        margin-bottom: 1em;
      }
    }

    .currency {
      color: gray;
    }

    .items {
      color: gray;
      ul {
        li:hover {
          color: royalblue;
        }
      }
    }

    .values {
      text-align: end;
    }
  }
}
</style>