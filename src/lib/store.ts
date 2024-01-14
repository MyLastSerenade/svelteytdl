import { writable } from "svelte/store";

export const progression = writable("")

progression.update((p) => p)