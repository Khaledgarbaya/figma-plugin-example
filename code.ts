figma.showUI(__html__)

const selection = figma.currentPage.selection['0']

figma.ui.postMessage({ selection: selection.characters })

figma.ui.onmessage = event => {
  if (event.type === 'close') {
    figma.closePlugin()
  }
}
