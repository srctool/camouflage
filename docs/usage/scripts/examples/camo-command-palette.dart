final palette = CamoCommandPaletteState();
final actions = CamoCommandSource.of(
  title: 'Actions',
  items: [CamoCommandItem(id: 'open', title: 'Open File', onSelect: openFile, shortcut: 'Ctrl+O')],
);
final files = CamoCommandSource(title: 'Files', search: searchProject); // a slow source shows a loading row

CamoCommandPalette(state: palette, sources: [actions, files]);

// From your own shortcut (Ctrl+K, double Shift)
palette.show();
