bool terms = false;

CamoCheckbox(
  checked: terms,
  onChanged: (value) => setState(() => terms = value),
  label: 'I agree to the terms',
  description: 'You can change this later in Settings',
)
