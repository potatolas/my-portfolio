import { onMounted, onBeforeUnmount } from 'vue'

export function useInitFadeIn(
  selector = '.fade-in-on-seen',
  threshold = 0.2
) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = document.querySelectorAll(selector)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('is-visible')
            }, 200 * index)
            // Only trigger once
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
      }
    )

    elements.forEach((element) => {
      observer?.observe(element)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}