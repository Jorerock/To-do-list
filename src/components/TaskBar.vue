<!-- <template>
  <header>
    <nav>
      <li><RouterLink to="/">home</RouterLink></li>
      <li><RouterLink to="/TodoList">TodoList</RouterLink></li>
      <li><RouterLink to="/HistoriqueDone">Historique</RouterLink></li>
    </nav>
  </header>
</template> -->

<template>
  <header>
    <div class="Menu">
      <div class="box"><RouterLink to="/">home</RouterLink></div>
      <div class="box"><RouterLink to="/TodoList">TodoList</RouterLink></div>
      <div class="box"><RouterLink to="/HistoriqueDone">Historique</RouterLink></div>
    </div>
  </header>
</template>

<style scoped>
.Menu {
  display: flex;
}

.Menu > div {
  flex: 2;
}

.box {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
