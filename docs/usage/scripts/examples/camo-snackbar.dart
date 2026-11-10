final messenger = CamoMessenger.of(context);

final result = await messenger.show('Message archived', action: 'Undo');
if (result == SnackbarResult.actionPerformed) undoArchive();

// A status tone
messenger.show('Could not save', tone: Tone.error);
