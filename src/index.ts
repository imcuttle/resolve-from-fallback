/**
 * Resolve the path of a module like `require.resolve()` but from some fallback path
 * @author 余聪
 */
import * as resolveFrom from 'resolve-from'

function resolveFallbacksInner(fallbacks: string[], id: string, silent: boolean): string | undefined {
  for (const fallback of fallbacks) {
    const result = resolveFrom.silent(fallback, id)
    if (!!result) {
      return result
    }
  }

  if (!silent) {
    const err = new Error(`Cannot find module '${id}' in \n${fallbacks.map((dir) => `- ${dir}`).join('\n')}`)
    // @ts-ignore
    err.code = 'MODULE_NOT_FOUND'
    throw err
  }
}

const resolveFallbacks = (fallbacks: string[], id: string) => resolveFallbacksInner(fallbacks, id, false) as string
resolveFallbacks.silent = (fallbacks: string[], id: string) => resolveFallbacksInner(fallbacks, id, true)

export = resolveFallbacks
