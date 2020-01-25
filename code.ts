figma.showUI(__html__)

figma.ui.onmessage = async event => {
  if (event.type === 'request:characters') {
    const selection = figma.currentPage.selection['0']
    figma.ui.postMessage({
      selection: (selection && selection.characters) || '',
      type: 'response:characters'
    })
    return
  }
  if (event.type === 'request:setText') {
    const selection = figma.currentPage.selection['0']
    if (selection) {
      await figma.loadFontAsync(selection.fontName)
      selection.characters = event.text
    }
    return
  }

  if (event.type === 'close') {
    figma.closePlugin()
  }
}
