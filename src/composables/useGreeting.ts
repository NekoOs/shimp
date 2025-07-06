import { ref } from 'vue'
import { fetchGreeting } from '../services'

export function useGreeting() {
  const name = ref('')
  const message = ref('')

  async function greet() {
    message.value = <string>await fetchGreeting(name.value)
  }

  return { name, message, greet }
}
