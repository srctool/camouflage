final state = CamoDockState(
  {'files': DockEdge.left, 'details': DockEdge.right, 'log': DockEdge.bottom},
  open: {'files'},
);

CamoDockLayout(
  state: state,
  toolWindows: [
    CamoToolWindow(id: 'files', title: 'Files', icon: filesIcon, defaultEdge: DockEdge.left, child: const FileTree()),
    CamoToolWindow(id: 'details', title: 'Details', icon: infoIcon, defaultEdge: DockEdge.right, child: const Details()),
    CamoToolWindow(id: 'log', title: 'Log', icon: logIcon, defaultEdge: DockEdge.bottom, child: const LogView()),
  ],
  center: const Editor(),
);

// From your own shortcut: open the Log and move focus into it
state.focus('log');
