<script>
  import { Moon, Sun } from "lucide-svelte";
  import { onMount } from "svelte";

  let theme = "light";

  onMount(() => {
    // Check for stored theme or system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      theme = storedTheme;
    } else if (prefersDark) {
      theme = "dark";
    }

    applyTheme(theme);
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }

  function applyTheme(newTheme) {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground"
  aria-label="Toggle theme"
>
  {#if theme === "dark"}
    <Sun class="h-5 w-5" />
  {:else}
    <Moon class="h-5 w-5" />
  {/if}
</button>
