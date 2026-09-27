import { FileSystemAdapter, MarkdownView, Notice, Plugin } from "obsidian";

export default class CiteSelectionPlugin extends Plugin {
  onload() {
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        if (!(view instanceof MarkdownView) || !view.file) return;
        const file = view.file;

        menu.addItem((item) => {
          item
            .setTitle("复制引用位置")
            .setIcon("quote")
            .setSection("selection")
            .onClick(() => {
              const adapter = this.app.vault.adapter;
              if (!(adapter instanceof FileSystemAdapter)) return;

              const absPath =
                adapter.getBasePath().replace(/\//g, "\\") +
                "\\" +
                file.path.replace(/\//g, "\\");

              const hasSelection = editor.somethingSelected();
              const from = editor.getCursor("from");
              const to = editor.getCursor("to");
              const startLine = from.line + 1;
              const endLine = to.line + 1;

              const location =
                startLine === endLine
                  ? `${absPath}#L${startLine}`
                  : `${absPath}#L${startLine}-L${endLine}`;
              const text = hasSelection
                ? editor.getSelection()
                : editor.getLine(from.line);

              navigator.clipboard.writeText(`${location}\n${text}`);
              new Notice("已复制引用位置");
            });
        });
      })
    );
  }
}
