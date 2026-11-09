bool notifications = true;

CamoSwitch(
  checked: notifications,
  onChanged: (value) => setState(() => notifications = value),
  label: 'Notifications',
  description: 'Uses more battery',
)
