/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
import * as resolveFromFallback from '../src'

import test from 'ava'
import { fixture } from './helper'

test('spec', (t) => {
  t.is(resolveFromFallback([fixture('node_modules')], 'react'), fixture('node_modules/react.js'))

  t.is(
    resolveFromFallback([fixture('node_modules'), fixture('node_modules/p')], 'react'),
    fixture('node_modules/react.js')
  )
  t.is(
    resolveFromFallback([fixture('node_modules/p'), fixture('node_modules')], 'react'),
    fixture('node_modules/p/node_modules/react.js')
  )

  t.is(
    resolveFromFallback([fixture('node_modules'), fixture('node_modules/p')], 'vue'),
    fixture('node_modules/p/node_modules/vue.js')
  )

  t.throws(() => resolveFromFallback([fixture('node_modules'), fixture('node_modules/p')], '404'), {
    code: 'MODULE_NOT_FOUND',
    message: /Cannot find module '404'/
  })
})
