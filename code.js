var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.onmessage = (event) => __awaiter(this, void 0, void 0, function* () {
    if (event.type === 'request:characters') {
        const selection = figma.currentPage.selection['0'];
        figma.ui.postMessage({
            selection: (selection && selection.characters) || '',
            type: 'response:characters'
        });
        return;
    }
    if (event.type === 'request:setText') {
        const selection = figma.currentPage.selection['0'];
        if (selection) {
            yield figma.loadFontAsync(selection.fontName);
            selection.characters = event.text;
        }
        return;
    }
    if (event.type === 'close') {
        figma.closePlugin();
    }
});
