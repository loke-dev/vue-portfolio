<template>
  <div id="hello">
    <h1>Welcome!</h1>
    <h3>Ask me anything!</h3>
    <p>
      Either write your question or press voice button and ask something!
    </p>

      <div class= "inputArea">
    		<input class="input" type="text"> <button class="voice"></button>
        <ul class="chatArea"></ul>
    	</div>

      <p>
        Example question you can ask:
      </p>
      <ul>
        <li>What's your name?</li>
        <li>Who created you?</li>
        <li>How can I contact you?</li>
        <li>What is your github?</li>
        <li>Can I reach you by email?</li>
        <li>Can I see your linkedin profile?</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style scoped>


</style>
