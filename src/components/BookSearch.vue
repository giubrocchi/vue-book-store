<script setup lang="ts">
import { useRoute } from 'vue-router';
import BookCard from './BookCard.vue';
import books from '@/assets/books.json';

const route = useRoute();
const searchQuery = route.params.searchQuery as string;
const matchedBooks = books.filter(
  (book) =>
    book.title.toLowerCase().includes(searchQuery) ||
    book.authors.some((author) => author.toLowerCase().includes(searchQuery))
);
</script>

<template>
  <div class="homeBackground">
    <div class="bookList" v-if="matchedBooks.length">
      <BookCard v-for="book in matchedBooks" :key="book.id" :book="book" />
    </div>
    <div class="noResultContainer" v-if="!matchedBooks.length">
      <img src="@/assets/noResult.png" />
      <h1>No results found.</h1>
    </div>
  </div>
</template>

<style scoped>
.homeBackground {
  background-color: #eee;
  display: flex;
  flex-direction: column;
}

.bookList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  justify-content: center;
  grid-gap: 30px;
  inline-size: -webkit-fill-available;
  inline-size: -moz-available;
  margin: 30px 10%;
}

.noResultContainer {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 50px 0px;
}

.noResultContainer img {
  width: 500px;
  height: auto;
}

.noResultContainer h1 {
  color: #6783cd;
  font-size: 50px;
}
</style>
