# Cite Selection（复制引用位置）

Obsidian 插件：在编辑模式框选语句后，右键菜单一键把「当前文档绝对路径 + 起止行号 + 框选原文」复制到剪贴板，粘贴即得带出处的引用。

## 效果

框选多行后粘贴得到：

```text
D:\ALLinONE\docs\note.md#L12-L15
框选的原文内容
```

- 单行选区：`…\note.md#L12`
- 无选区也可点击：复制光标所在行（路径#L行号 + 该行文本）
- 仅在**编辑模式**（实时预览/源码）生效，阅读模式的右键菜单不含此项

## 安装

### 方式一：BRAT（推荐尝鲜）

1. 安装社区插件 [BRAT](https://github.com/TfTHacker/obsidian42-brat)；
2. BRAT 设置 → Add Beta Plugin → 填入本仓库地址；
3. 启用 Cite Selection。

### 方式二：手动安装

1. 从 [Releases](../../releases) 下载 `main.js` 与 `manifest.json`；
2. 放入 `<你的库>/.obsidian/plugins/cite-selection/`；
3. 设置 → 第三方插件 → 启用 Cite Selection。

## 使用

编辑模式下框选任意文字 → 右键 → 「复制引用位置」→ 到目标处粘贴。

## 开发

```bash
npm install
npm run dev    # 监听构建，产物直接输出到本机 vault 插件目录（按 esbuild.config.mjs 中路径）
npm run build  # 发布构建，main.js 输出到仓库根目录
```

## License

MIT
