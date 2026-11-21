// A tree keeps the ancestors of matches and opens them
CamoTree(
  roots: roots, // expanded, selected, label, semanticLabel …
  speedSearch: CamoSpeedSearchState(),
);

// A menu filters its items as you type, instead of the type-ahead
CamoMenuAnchor(
  items: items,
  speedSearch: true,
  builder: (context, open) => OverflowButton(onPressed: open),
);

// Your own list: match and highlight yourself
final match = CamoMatcher.match('fLog', 'featureLogin'); // the ranges to highlight, or null
