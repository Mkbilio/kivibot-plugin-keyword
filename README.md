# 关键词 for KiviBot

[![npm-version](https://img.shields.io/npm/v/kivibot-plugin-keyword?color=527dec&label=kivibot-plugin-keyword&style=flat-square)](https://npm.im/kivibot-plugin-keyword)
[![dm](https://shields.io/npm/dm/kivibot-plugin-keyword?style=flat-square)](https://npm.im/kivibot-plugin-keyword)

[`KiviBot`](https://beta.kivibot.com) 的简单关键词插件。

**安装**

```shell
/plugin add keyword
```

**启用**

```shell
/plugin on keyword
```

**使用**

编辑 `框架目录/data/plugins/关键词/config.json` 配置文件。

示例如下，`words` 为二维数组格式，每个词为一个配置，数组的一项。

单个配置是也一个数组，从左到右依次为：触发词, 回复内容, 匹配模式（0 精确, 1 模糊）

```jsonc
{
  "words": [
    ["hello", "world", 0],
    ["测试", "你好，我是 KiviBot", 0]
  ]
}
```

重载插件生效。
