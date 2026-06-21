import { h } from 'hastscript'
import type { ShikiTransformer } from 'shiki'

function parseMetaString(str = '') {
  return Object.fromEntries(
    str.split(' ').reduce(
      (acc: [string, string | true][], cur) => {
        const m = cur.match(/(.+)?=("(.+)"|'(.+)')$/)
        if (!m) return acc
        acc.push([m[1], m[3] || m[4] || true])
        return acc
      }, [] as [string, string | true][]
    )
  )
}

export const updateStyle = (): ShikiTransformer => ({
  name: 'shiki-transformer-update-style',
  pre(node) { const c = h('pre', node.children); node.children = [c]; node.tagName = 'div' }
})

export const processMeta = (): ShikiTransformer => ({
  name: 'shiki-transformer-process-meta',
  preprocess() {
    if (!this.options.meta) return
    const raw = this.options.meta?.__raw
    if (raw) Object.assign(this.options.meta, parseMetaString(raw))
  }
})

export const addTitle = (): ShikiTransformer => ({
  name: 'shiki-transformer-add-title',
  pre(node) {
    const raw = this.options.meta?.__raw
    if (!raw) return
    const meta = parseMetaString(raw)
    if (meta.title) node.children.unshift(h('div', { class: 'title text-sm text-muted-foreground px-3 py-1 rounded-lg border' }, meta.title.toString()))
  }
})

export const addLanguage = (): ShikiTransformer => ({
  name: 'shiki-transformer-add-language',
  pre(node) { node.children.push(h('span', { class: 'language ps-1 pe-3 text-sm bg-muted text-muted-foreground' }, this.options.lang)) }
})

export const addCopyButton = (timeout?: number): ShikiTransformer => {
  const ms = timeout || 2000
  const act = `const b=event.currentTarget;navigator.clipboard.writeText(b.dataset.code);b.classList.add('copied');setTimeout(()=>b.classList.remove('copied'),${ms})`
  return {
    name: 'shiki-transformer-copy-button',
    pre(node) {
      node.children.push(h('button', {
        class: 'copy text-muted-foreground p-1 box-content border rounded-lg bg-card',
        'aria-label': 'Copy code', 'data-code': this.source, tabindex: '0',
        onclick: act,
        onkeydown: `if(event.key==='Enter'||event.key===' '){event.preventDefault();${act}}`
      }, [
        h('div', { class: 'ready' }, [h('svg', { class: 'size-5' }, [h('use', { href: '/icons/code.svg#mingcute-clipboard-line' })])]),
        h('div', { class: 'success hidden' }, [h('svg', { class: 'size-5' }, [h('use', { href: '/icons/code.svg#mingcute-file-check-line' })])])
      ]))
    }
  }
}

export const addCollapse = (displayLineCount?: number): ShikiTransformer => {
  const line = displayLineCount || 15
  const act = "this.parentElement.classList.toggle('collapsed')"
  return {
    name: 'shiki-transformer-add-collapse',
    pre(node) {
      if (this.lines.length <= line) return
      node.properties = { ...node.properties, class: `${(node.properties?.class as string) || ''} collapsed` }
      node.children.push(h('button', {
        class: 'collapse-toggle bg-card text-muted-foreground rounded-lg m-2',
        'aria-label': 'Toggle collapse', tabindex: '0',
        onclick: act,
        onkeydown: `if(event.key==='Enter'||event.key===' '){event.preventDefault();${act}}`
      }, [h('svg', { class: 'size-5' }, [h('use', { href: '/icons/code.svg#mingcute-arrow-down-line' })]), h('span', { class: 'desc' }, ' code')]))
      node.children.push(h('div', { class: 'collapse-fade' }))
    }
  }
}
