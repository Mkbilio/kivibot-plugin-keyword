import { KiviPlugin } from '@kivibot/core'

const { version } = require('../package.json')
const plugin = new KiviPlugin('关键词', version)

const config = {
  words: []
} as const

plugin.onMounted(() => {
  plugin.saveConfig(Object.assign(config, plugin.loadConfig()))

  const accurates = config.words.filter(e => !e[2])
  const fuzzies = config.words.filter(e => !!e[2])
  const acs = accurates.map(e => e[0])

  plugin.onMatch(acs, event => {
    event.reply(accurates.find(e => e[0] === event.toString())![1])
  })

  plugin.onMessage(event => {
    for (const item of fuzzies) {
      if (event.raw_message.includes(item[0])) {
        event.reply(item[1])
      }
    }
  })
})

export { plugin }
