final state = CamoSplitState([1, 3]); // fractions, so a saved layout fits any window

CamoSplitPane(
  axis: Axis.horizontal,
  state: state,
  panes: [
    CamoPane(minSize: 160, collapsible: true, child: const Sidebar()),
    CamoPane(minSize: 240, child: const Detail()),
  ],
);

// Save and restore the layout yourself
final saved = state.snapshot();
state.apply(saved);
