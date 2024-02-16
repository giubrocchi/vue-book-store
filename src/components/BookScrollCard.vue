<script setup lang="ts">
import { useRouter } from 'vue-router';
const { backgroundColor, book = {} } = defineProps({ backgroundColor: String, book: Object });

const router = useRouter();
</script>

<template>
  <div
    class="background"
    :style="{
      background: `linear-gradient(
        to bottom,
        ${backgroundColor} 0%,
        ${backgroundColor} 80%,
        transparent 80%,
        transparent 100%
      )`
    }"
    @click.prevent="router.push(`/book/${book.id}`)"
  >
    <img class="cover" :src="book.cover" />
    <div class="bookInfo">
      <h2>{{ book.title }}</h2>
      <span class="authors">by {{ book.authors?.join(',') }}</span>
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.background {
  height: 350px;
  width: 40%;
  min-width: 430px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  cursor: pointer;
}

.cover {
  height: 85%;
  object-fit: contain;
  box-shadow: 0px 0px 15px #a9a9a9;
}

.bookInfo {
  align-self: flex-start;
  margin-top: 5%;
  color: #fff;
  height: 65%;
  overflow: hidden;
}

.bookInfo h2,
.authors {
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bookInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
