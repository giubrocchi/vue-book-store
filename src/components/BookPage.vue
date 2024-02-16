<script setup lang="ts">
import books from '@/assets/books.json';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = books.find(({ id }) => id === bookId);
</script>

<template>
  <div class="container">
    <div class="background">
      <img class="cover" :src="book?.cover" />
      <div class="bookInfo">
        <h2>{{ book?.title }}</h2>
        <span class="authors">by {{ book?.authors?.join(',') }}</span>
        <p>{{ book?.description }}</p>
      </div>
    </div>
    <div class="paymentContainer">
      <div class="infoContainer">
        <div class="categoriesInfo">
          <span class="infoTitle">Categories:</span>
          <div class="categoriesContainer">
            <span v-for="category in book?.categories" :key="category" class="category">
              {{ category }}
            </span>
          </div>
        </div>
        <span>
          <p class="infoTitle">Language:</p>
          <p class="infoValue">{{ book?.language }}</p>
        </span>
        <span>
          <p class="infoTitle">Release date:</p>
          <p class="infoValue">{{ book?.year }}</p>
        </span>
      </div>
      <div class="buyContainer">
        <span class="price">
          <p>{{ book?.currency }}</p>
          <p>{{ book?.price.toFixed(2) }}</p>
        </span>
        <button class="addToCartButton">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  gap: 15%;
}
.background {
  width: 60%;
  min-width: 430px;
  height: 60dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #e7b0cd;
  box-shadow: 3px 3px 10px #b9b9b9;
}

.paymentContainer {
  width: 25%;
  min-width: 200px;
  height: 60dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  background-color: #e7b0cd;
  box-shadow: -3px 3px 10px #b9b9b9;
}

.cover {
  height: 100%;
  max-width: 50%;
  object-fit: contain;
  box-shadow: 0px 0px 15px #a9a9a9;
}

.bookInfo {
  align-self: flex-start;
  margin-top: 10px;
  color: #fff;
  height: 100%;
}

.bookInfo h2,
.authors {
  margin: 0px;
}

.bookInfo h2 {
  font-size: 26px;
}

.bookInfo p {
  font-size: 18px;
  line-height: 28px;
  overflow-y: scroll;
  padding-right: 10px;
  height: 80%;
}

.bookInfo p::-webkit-scrollbar {
  width: 8px;
}

.bookInfo p::-webkit-scrollbar-track {
  background: none;
}

.bookInfo p::-webkit-scrollbar-thumb {
  background-color: #acacb1;
  border-radius: 20px;
}

.price {
  display: inline-flex;
  gap: 5px;
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  margin-top: 8px;
}

.price p {
  margin: 0px;
}

.addToCartButton {
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  display: flex;
  background-color: #b676ff;
  color: #fff;
  border: 0px;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
}

.infoContainer {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 30px;
}

.infoContainer span {
  display: flex;
  color: #fff;
  gap: 10px;
  align-items: center;
}

.infoContainer p {
  margin: 0px;
}

.categoriesInfo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.categoriesContainer {
  display: flex;
  gap: 15px;
  flex-flow: wrap;
}

.category {
  background-color: #8acfde;
  padding: 5px 10px;
  color: #fff;
  border-radius: 20px;
  box-shadow: 3px 3px 5px #a0a0a0;
}

.infoTitle {
  font-weight: 600;
}

.infoValue,
.infoTitle {
  font-size: 20px;
}

.buyContainer {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
