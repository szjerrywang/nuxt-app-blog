<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- <script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()

const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <Button
      v-for="locale in locales"
      :key="locale.code"
      @click="setLocale(locale.code)"
    >
      {{ locale.name }}
    </Button>
    <h1>{{ $t('welcome') }}</h1>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">
          <Icon icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="colorMode.preference = 'light'">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template> -->
