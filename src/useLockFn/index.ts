import { ref, watch, reactive } from 'vue-demi'
// import {  } from 'vue-demi'

export type noop = (...args: any[]) => any

export function useLockFn<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>
) {
  const lockRef = ref(false)

  return watch(fn, async (...args: P) => {
    if (lockRef) return
    lockRef = true
    try {
      const ret = await fn(...args)
      return ret
    } catch (e) {
      lockRef = false
      throw e
    }
  })
}
