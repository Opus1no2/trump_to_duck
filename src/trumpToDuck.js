((d) => {
  getTextNodes = () => {
    let node,
    textNodes = [],
    walk = d.createTreeWalker(d.body, NodeFilter.SHOW_TEXT, null, false);

    while(node = walk.nextNode()) {
      textNodes.push(node);
    }
    return textNodes;
  }

  (() => {
    textNodes = getTextNodes();
    textNodes.forEach((node) => {
      if (node.nodeValue.match(/donald/i)) {
        node.nodeValue = node.nodeValue.replace(/\bTrump\b/g, "Duck");
      }

      if (node.nodeValue.match(/trump/i)) {
        node.nodeValue = `${node.nodeValue.replace(/\bTrump\b/g, "Donald Duck")}`
      }
    });
  })();
})(document);
