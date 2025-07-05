import {invoke} from "@tauri-apps/api/core";

export async function fetchGreeting(name: string) {
    return await invoke("greet", { name });
}