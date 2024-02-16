<script setup lang="ts">
import { onMounted } from 'vue';
import BookScrollCard from './BookScrollCard.vue';
import BookCard from './BookCard.vue';
import books from '@/assets/books.json';

const promotedBooks = books.filter(({ promoted }) => promoted);
const scrollBackgroundColors = ['#fcadb0', '#e7b0cd', '#8acfde'];
let scrollIndex = 0;

function getPromotedBookIndex(id: number): number {
  return promotedBooks.findIndex((book) => book.id === id);
}

function scrollToCard(action: string) {
  if (action === 'previous') {
    const newIndex = scrollIndex - 1 < 0 ? promotedBooks.length - 1 : scrollIndex - 1;
    const scrollItems = document.querySelectorAll<HTMLElement>('.bookScrollItem');

    scrollItems[scrollIndex].style.display = 'none';
    scrollItems[newIndex].style.display = 'flex';

    scrollIndex = newIndex;
    return;
  }

  const newIndex = scrollIndex + 1 >= promotedBooks.length - 1 ? 0 : scrollIndex + 1;
  const scrollItems = document.querySelectorAll<HTMLElement>('.bookScrollItem');

  scrollItems[scrollIndex].style.display = 'none';
  scrollItems[newIndex].style.display = 'flex';

  scrollIndex = newIndex;
}

onMounted(
  () =>
    (document.querySelectorAll<HTMLElement>('.bookScrollItem')[scrollIndex].style.display = 'flex')
);
</script>

<template>
  <div class="homeBackground">
    <div class="bookScroll">
      <button @click.prevent="scrollToCard('previous')">&lt;</button>
      <BookScrollCard
        v-for="book in promotedBooks"
        :key="book.id"
        :background-color="
          scrollBackgroundColors[getPromotedBookIndex(book.id) % scrollBackgroundColors.length || 0]
        "
        :book="book"
        class="bookScrollItem"
      />
      <button @click.prevent="scrollToCard('next')">&gt;</button>
    </div>
    <div class="bookList">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
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

.bookScroll {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
}

.bookScroll button {
  background-color: #fff;
  height: fit-content;
  padding: 6px 18px;
  border-radius: 100px;
  font-size: 40px;
  color: #cccccc;
  border: none;
  outline: none;
  align-self: center;
  cursor: pointer;
  transition: 0.5s;
}

.bookScroll button:hover {
  background-color: #f8f8f8;
}

.bookScrollItem {
  display: none;
  animation-name: fade;
  animation-duration: 1s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
