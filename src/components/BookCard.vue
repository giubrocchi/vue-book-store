<script setup lang="ts">
import { useRouter } from 'vue-router';
const { book = {} } = defineProps({ book: Object });

const router = useRouter();
</script>

<template>
  <div class="bookContainer" @click.prevent="router.push(`/book/${book.id}`)">
    <div class="containerTop">
      <img class="cover" :src="book.cover" />
      <span class="title">{{ book.title }}</span>
      <span class="authors">by {{ book.authors?.join(',') }} </span>
    </div>
    <span class="price">
      <p>{{ book.currency }}</p>
      <p>{{ book.price.toFixed(2) }}</p>
    </span>
  </div>
</template>

<style scoped>
.bookContainer {
  background-color: #ffffff;
  box-shadow: 2px 2px 5px #a9a9a9;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  max-width: 160px;
}

.containerTop {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.cover {
  width: 140px;
  height: 200px;
  object-fit: contain;
  align-self: center;
}

.title {
  font-weight: 600;
  margin-top: 5px;
}

.authors {
  color: #7a7a7a;
}

.title,
.authors {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price {
  display: inline-flex;
  gap: 5px;
  font-weight: 500;
  margin-top: 8px;
}

.price p {
  margin: 0px;
}
</style>
