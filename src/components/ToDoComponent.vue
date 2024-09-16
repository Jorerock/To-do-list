<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  todo: {
    done: boolean;
    todo: string;
  };
}>();

const editMode = ref(false);

const NewValue = ref(props.todo.todo);

function ActiveEdit() {
  console.log('todocomponent a detecter un changement', value);
  emit('onInput', { ...props.todo, todo: NewValue });
}

const emit = defineEmits(['onInput', 'onUpdate']);

const onInput = (value: boolean) => {
  console.log('todocomponent a detecter un changement', value);
  emit('onInput', { ...props.todo, done: value });
};
</script>

<template>
  <element :class="{ checked: props.todo.done }">
    <div v-if="!editMode">
      <!-- {{ props.todo.todo }}
        <input
          type="checkbox"
          :checked="props.todo.done"
          @click="(event: any) => onInput(event.target?.checked)"
        /> -->

      <span @click="editMode = !editMode">
        {{ props.todo.todo }}
      </span>
      <input
        type="checkbox"
        :checked="props.todo.done"
        @click="(event: any) => onInput(event.target?.checked)"
      />

      <!-- <input
          type="checkbox"
          :checked="editMode"
          @click="(event: any) => onInput(event.target?.checked)"
        /> -->

      <br />
    </div>
    <span v-else>
      <input type="text" v-model="NewValue" />
      <button
        type="button"
        @click="
          editMode = !editMode;
          props.todo.todo = NewValue;
        "
      >
        ✔
      </button>
      <button
        type="button"
        @click="
          editMode = !editMode;
          NewValue = props.todo.todo;
        "
      >
        X
      </button>
    </span>
  </element>
</template>

<style scoped>
.checked {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

element:not(.checked) {
  background-color: rgb(232, 207, 207);
  border: 2px solid rgb(227, 79, 91);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
