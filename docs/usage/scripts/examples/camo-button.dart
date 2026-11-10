CamoButton(text: 'Save', onPressed: save)

// Weight and meaning
CamoButton(text: 'Cancel', onPressed: cancel, appearance: Appearance.ghost)
CamoButton(text: 'Delete', onPressed: delete, appearance: Appearance.outline, tone: Tone.error)

// Loading: ignores taps
CamoButton(text: 'Saving', onPressed: save, loading: true)

// Disabled: a null callback
const CamoButton(text: 'Continue', onPressed: null)
