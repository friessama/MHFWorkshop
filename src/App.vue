<script setup lang="js">
import { ref, onMounted } from 'vue'
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const titleVal = ref('')
const descVal = ref('')
const posts = ref([]);

async function add() {
  const data = {
    title: titleVal.value,
    description: descVal.value
  };

  const record = await pb.collection('posts').create(data);
  console.log("Record: ",record);

  posts.value.push(data);
}
onMounted(async () => {
  const data = await pb.collection('posts').getFullList();
  console.log("Posts: ",data);

  posts.value = data;
});

</script>

<template>
  <input v-model="titleVal" /> <br />
  <input v-model="descVal" /> <br />
  <button @click="add">Add</button>

  <ul>
    <li v-for="post in posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </li>
  </ul>
</template>

<style>
</style>