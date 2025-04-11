<script>
  import { Menu } from "lucide-svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <div class="container flex h-16 items-center justify-between">
    <div class="flex items-center gap-2 font-bold text-xl">
      <img src="/images/logo.svg" alt="logo" class="w-20 h-16" />
    </div>
    <nav class="hidden md:flex gap-6">
      <a
        href="/"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Home
      </a>
      <a
        href="/blog"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Blog
      </a>
      <a
        href="/#about"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        About
      </a>
      <a
        href="/#community"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Community
      </a>
      <a
        href="/#join"
        class="text-muted-foreground hover:text-foreground transition-colors"
      >
        Join Us
      </a>
    </nav>
    <div class="flex items-center gap-2">
      <ThemeToggle />
      <button
        class="md:hidden ghost"
        aria-label="Toggle menu"
        on:click={toggleMenu}
      >
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle menu</span>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="container md:hidden py-4 bg-background border-t">
      <nav class="flex flex-col gap-4">
        <a
          href="/"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </a>
        <a
          href="/blog"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </a>
        <a
          href="#about"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </a>
        <a
          href="#community"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Community
        </a>
        <a
          href="#join"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Join Us
        </a>
      </nav>
    </div>
  {/if}
</header>
