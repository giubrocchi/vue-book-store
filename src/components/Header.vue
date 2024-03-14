<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const query = ref();

function searchBook() {
  const formattedQuery = query.value.trim()?.toLowerCase() ?? '';

  if (!formattedQuery) {
    goToHome();
    return;
  }

  router.push(`/browse/${formattedQuery}`);
}

function goToHome() {
  query.value = '';
  router.push('/');
}
</script>

<template>
  <div class="background">
    <div class="logoContainer" @click.prevent="goToHome">
      <img class="logoImage" src="@/assets/minervaLogo.png" />
      <h1 class="logoName">Minerva Store</h1>
    </div>
    <div class="searchContainer">
      <form @submit.prevent="searchBook">
        <button type="submit">
          <v-icon name="bi-search" fill="var(--dark-base-color)" scale="1.5" />
        </button>
        <input type="text" placeholder="Search book" v-model="query" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #f6f7f8;
  display: grid;
  padding: 10px 20px;
  grid-template-columns: 1fr 1fr 1fr;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logoContainer {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}

.logoImage {
  height: 40px;
}

.logoName {
  margin: 0px 10px;
  font-weight: 100;
  font-size: 22px;
}

.searchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchContainer form {
  display: contents;
}

.searchContainer button {
  background: none;
  border: none;
  outline: none;
}

.searchContainer input {
  border: transparent solid 1px;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  font-family: Inter;
  font-size: 17px;
  margin-left: 10px;
  padding: 10px;
  width: 100%;
  color: var(--dark-base-color);
  transition: 0.4s ease-in-out;
}

.searchContainer input:focus {
  border: #bbb solid 1px;
}
</style>
