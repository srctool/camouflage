final state = CamoDocumentTabsState(); // order and pins; snapshot() and apply() to save them

CamoDocumentTabs(
  documents: [
    for (final d in documents) CamoDocument(id: d.id, title: d.name, modified: d.unsaved),
  ],
  selected: selected,
  onSelect: (id) => setState(() => selected = id),
  onClose: closeDocument, // the app removes it and picks the next tab
  state: state,
  onContextMenu: (doc) => [
    CamoMenuItem(text: 'Pin', onPressed: () => state.pin(doc.id)),
  ],
);
