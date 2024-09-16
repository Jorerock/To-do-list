<script setup lang="ts">
import ToDoComponent from './ToDoComponent.vue'
import { ref } from 'vue'

const montab = ref([
  { todo: 'apprendre Vue Js', done: false },
  { todo: 'apprendre à faire des boucles', done: true },
  { todo: 'apprendre à griller des saucisses', done: true },
  { todo: 'Ajouter des dates', done: false },
  { todo: 'rechercher une liste', done: false },
  { todo: 'ajouter un element a la liste', done: false }
])

// const AddTodo = ()

const onTodoInput = (newTodoValue: any, index: number) => {
  montab.value[index] = newTodoValue
  console.log('Montab a ete mis a jour')
}
</script>

<template>
  <div class="List">
    <!-- <span v-for="element in montab" v-bind:key="element.todo"> -->
    <!-- <div class="box"> -->
    <!-- <element :class="{ checked: element.done }"> {{ element.todo }} </element>
      <input type="checkbox" :checked="element.done" /> -->
    <!-- </div> -->

    <ToDoComponent
      v-for="(element, index) in montab"
      :todo="element"
      v-bind:key="index"
      @onInput="onTodoInput($event, index)"
    />

    <br />
    <!-- </span> -->
  </div>
  <br />
  <span v-if="montab.length % 2 === 0">Mon tab est pairs </span>
  <br />

  <!-- <button @click="ajouterElement">Ajoute une valeur</button>
  {{ montab }} -->
</template>

<style scoped>
.List {
  display: flex;
}

/* .box {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(227, 79, 99);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
} */
</style>
