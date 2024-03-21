<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import api from './service/api';



let inputEmail = ref<string>('')
let mensagemStatus = ref<string>('')

// let validate = new RegExp("/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i")
let validate = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

// teste regex
watchEffect(()=> {
  console.log(validate.test(inputEmail.value))
  if(validate.test(inputEmail.value)) {
    console.log(inputEmail.value)
  }
})

watch(mensagemStatus, (mensagemStatus: any) => {
  return mensagemStatus
})

const submit = () => {

  if (!validate.test(inputEmail.value)) {

    mensagemStatus.value = 'Email invalido'

  } else {

    mensagemStatus.value = ''
    console.log(inputEmail.value)
    api.post('/saveEmail', {
      email: inputEmail.value
    }).then((response: any) => {

      if (response.status == 200) {
        mensagemStatus.value = 'Email salvo com sucesso'
      } else {
        mensagemStatus.value = 'Algo de errado aconteceu'
      }

    })
  }
}


</script>

<template>
  <div class="bg-gray-200 w-full h-full flex items-center justify-center">
    <div class="w-6/12 min-w-[600px]">
      <h1 class="py-4">Inscreva-se para receber mais novidades!</h1>
      <div class="bg-white p-2  rounded-lg flex shadow-sm">
        <input v-model="inputEmail" class="w-4/5 h-10 focus:outline-none" type="email"
          placeholder="Digite seu email"></input>
        <button @click="submit"
          class="bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-md h-10 w-1/5 min-w-[150px] flex justify-center items-center">Inscrever-se</button>
      </div>
      <h1 class="text-red-500">{{ mensagemStatus }}</h1>
    </div>




  </div>
</template>
